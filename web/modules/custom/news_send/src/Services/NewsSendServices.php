<?php

namespace Drupal\news_send\Services;

use Drupal\Core\Render;
use Drupal\node\Entity\Node;

/**
 * Service that adds node to queue.
 */
class NewsSendServices {

  private EntityViewBuilder $builder;

  /**
   * Adds node to queue for send.
   *
   * @param int $nid
   *   Contain id of added/updated news.
   */
  public function nodeAddToQueue(int $nid): void {

    // Get queue and if it empty or missing create it
    $queue = \Drupal::queue('to_send');
    if ($queue->numberOfItems() === 0) {
      $queue->deleteQueue();
      $queue->createQueue();
    }

    // Get send list from state
    $state = \Drupal::service('state');
    $storageQueue = $state->get('news_send');
    if (empty($storageQueue)) {
      $storageQueue = [];
    }
    $checker = FALSE;

    // If node in send list then skip it

    foreach ($storageQueue as $value) {
      if ($nid === $value['nid']) {
        $checker = True;
        break;
      }
    }

    // If node is not in send list push it there

    if (!$checker) {
      $timeStamp = time();
      $queue_item = [
        'nid' => $nid,
        'insert_timestamp' => $timeStamp,
        'is_sent' => FALSE,
      ];
      $queue->createItem($nid);
      array_push($storageQueue, $queue_item);
    }

    // Return send list to state

    $state->set('news_send', $storageQueue);
  }

  /**
   * Clears to_send queue of sent nodes.
   */
  public function clearNewsQueue():void {
    // Get send list from state

    $state = \Drupal::service('state');
    $storageQueue = $state->get('news_send');
    if (empty($storageQueue)) {
      $storageQueue = [];
    }

    // Delete sent nodes from send queue

    foreach ($storageQueue as $key => $value) {
      if ($value['is_sent']) {
        unset($storageQueue[$key]);
      }
    }
  }

  /**
   * Build email from needed nodes
   */

  function emailBuild ():array {
    $result = [];
    $queue = \Drupal::queue('to_send');
    while ($item = $queue->claimItem()) {
      if (!$item->data['is_sent']) {
        $node = Node::load($item->data['nid']);
        $item->data['is_sent'] = TRUE;
        $builder = \Drupal::entityTypeManager()->getViewBuilder('node');
        $pre_render = $builder->view($node, 'teaser');
        $render_output = render($pre_render);
        array_push($result, $render_output);
      }
      array_push($temp, $item->data);
      $queue->deleteItem($item);
    }
    foreach ($temp as $value) {
      $queue->createItem($value);
    }
    return $result;
  }

  /**
   * Push to cron query nid news if we have not this in query.
   *
   * @param int $id
   *   Contain id of added/updated news.
   */
  public function sendTestMail(){
    // Build mail params.
    $params['subject'] = 'Our last news';
    $params['site_logo'] = \Drupal::theme()->getActiveTheme()->getLogo();
    $params['contents'] = $this->emailBuild();
    if (empty($params['contents']))
      return array();
    $params['users'] = $this->getEmailsList();
    // Send mail via service.
    $mail_service = \Drupal::service('news_send.mail');
    $mail_service->sendMail($params);
    return array();
  }

  public function getEmailsList(){
    $database = \Drupal::database();
    $query = $database->select('webform_submission_data', 'wsd')
      ->condition('webform_id', 'let_s_get_started')
      ->condition("name", "email")
      ->groupBy('value');

    $query->addField('wsd', 'value');

    $result = $query->execute()->fetchAll();

    $emails = [];
    foreach ($result as $value) {
      $emails[] = $value->value;
    }
    return $emails;
  }
}
