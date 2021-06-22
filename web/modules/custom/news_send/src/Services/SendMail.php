<?php

namespace Drupal\news_send\Services;

class SendMail {
  /**
   * @var $route
   */
  protected $mailer;

  /**
   * @var $current_user
   */
  protected $current_user;

  /**
   * Constructor.
   *
   * @param $mailer
   * @param $current_user
   * @param $members
   */
  public function __construct($mailer, $current_user) {
    $this->mailer = $mailer;
    $this->current_user = $current_user;
  }

  /**
   * Sends the mails.
   *
   * @param array $params
   */
  public function sendMail(array $params = []) {
    $module = 'news_send';
    $key = 'news_send';
    $lang_code = \Drupal::languageManager()->getCurrentLanguage()->getId();

    // Send emails.
    $users = $params['users'];
    $user_count = count($users);
    foreach ($users as $user) {
      foreach ($params['contents'] as $content) {
        $params['content'] = $content;
        $result = $this->mailer->mail($module, $key, $user, $lang_code, $params, NULL, TRUE);
      }
    }

    $message = \Drupal::logger('news_send');
    if($result['result'] === true){
      $message->notice($user_count .t(' user(s) notified successfully.'));
    } else {
      $message->error($this->t('Unable to send emails, please contact administrator!'));
    }

  }
}
