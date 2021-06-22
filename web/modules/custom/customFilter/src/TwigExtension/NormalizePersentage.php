<?php

namespace Drupal\customFilter\TwigExtension;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

/**
 * A custom Twig extension that adds normalizePersentage filter.
 */
class NormalizePersentage extends AbstractExtension {

  /**
   * {@inheritdoc}
   */
  public function getFilters() {
    return [new TwigFilter('normalize_persentage', [$this, 'normalizePersentage'])];
  }

  /**
   * {@inheritdoc}
   */
  public function getName()
  {
    return 'customFilter.twig_extension';
  }

  /**
   * Normalise Percentage function to delete unnecesarry zeros.
   *
   * @param array $string
   *   Array that ships field from twig.
   *
   * @return string
   *   Processed string without zeros.
   */
  public static function normalizePersentage(array $string) {
    $str = $string['#markup'];
    return preg_replace('!\d+(?:\.\d+)?!', (float) $str, $str);
  }

}
