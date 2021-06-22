/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.poetic = {
    attach: function(context, settings) {
      $('#block-homepageheaderarrow').once().bind('click', function () {
        let temp = 0;
        $('html, body').animate({
          scrollTop: $('#block-homepagefeatured').offset().top - temp}, 500);
        return true;
      });
      let path = window.location.pathname;
      if ((path === "/") || (path === "/main")) {
        $(document).ready( function () {
          let animation = $('#block-animationonhomepage').offset().top;
          let our_work = $('#block-views-block-homepage-our-work-block-1').offset().top;
          let services = $('#block-views-block-what-can-we-build-together-block-1').offset().top;
          $(window).once().scroll(function () {
            let win_bottom = $(window).height() + $(window).scrollTop();
            let sm_title = $('.field--name-field-featured-small-title').offset().top;
            let bg_title = $('.field--name-field-featured-big-title').offset().top;
            let text = $('.col-lg-4 .field--name-body').offset().top;
            let desc = $('.field--name-field-featured-class').offset().top;

            if (win_bottom >= sm_title) {
              let opacity = ((win_bottom - sm_title - 200)+200)/300;
              if ((opacity >= 0) && (opacity <= 1)) {
                let padding;
                if (opacity > 0 ) {
                  padding = 5/opacity;
                }
                if (opacity >=1) {
                  padding = 0;
                }
                if (padding > 5) {
                  padding = 5;
                }
                $('.field--name-field-featured-small-title').css("opacity", opacity);
                $('.field--name-field-featured-small-title').css("padding-top", padding);
              }
            }
            if (win_bottom >= bg_title) {
              let opacity = ((win_bottom - bg_title - 200)+200)/300;
              if ((opacity >= 0) && (opacity <= 1)) {
                let padding;
                if (opacity > 0 ) {
                  padding = 5/opacity;
                }
                if (opacity >=1) {
                  padding = 0;
                }
                if (padding > 5) {
                  padding = 5;
                }
                $('.field--name-field-featured-big-title').css("opacity", opacity);
                $('.field--name-field-featured-big-title').css("padding-top", padding);
              }
            }
            if (win_bottom >= text) {
              let opacity = ((win_bottom - text - 400)+400)/300;
              if ((opacity >= 0) && (opacity <= 1)) {
                let padding;
                if (opacity > 0 ) {
                  padding = 5/opacity;
                }
                if (opacity >=1) {
                  padding = 0;
                }
                if (padding > 5) {
                  padding = 5;
                }
                $('.col-lg-4 .field--name-body').css("opacity", opacity);
                $('.col-lg-4 .field--name-body').css("padding-top", padding);
              }
            }
            if (win_bottom >= desc) {
              let opacity = ((win_bottom - desc - 200)+200)/300;
              if ((opacity >= 0) && (opacity <= 1)) {
                let padding;
                if (opacity > 0 ) {
                  padding = 5/opacity;
                }
                if (opacity >=1) {
                  padding = 0;
                }
                if (padding > 5) {
                  padding = 5;
                }
                $('.field--name-field-featured-class').css("opacity", opacity);
                $('.field--name-field-featured-class').css("padding-top", padding);
              }
            }
            if (win_bottom > (animation + 400)) {
              $('.anim-container-mark').addClass("main-anim-container");
              $('.anim-container-mark').removeClass("anim-container-mark");
            }
            if (win_bottom > ((our_work) + 400)) {
              let case_studies = $('#block-views-block-homepage-our-work-block-1 .blazy--grid').children('.list-group-item');
              $('#block-views-block-homepage-our-work-block-1 .view-header').once().addClass('appear_from_bottom_show');
              setTimeout(()=>{
                $('#block-views-block-homepage-our-work-block-1 h2').once().addClass('appear_from_bottom_show');
                animate_children(case_studies, 'appear_from_bottom_show', 100);
              }, 300);
            }
            if (win_bottom > (services + 600)) {
              animate_children($('#block-views-block-what-can-we-build-together-block-1 .blazy--view').children('.list-group-item'), 'animated-item', 100);
            }
            if (win_bottom >= sm_title) {
              let opacity = ((win_bottom - sm_title - 200)+200)/300;
              if ((opacity >= 0) && (opacity <= 1)) {
                let padding;
                if (opacity > 0 ) {
                  padding = 5/opacity;
                }
                if (opacity >=1) {
                  padding = 0;
                }
                if (padding > 5) {
                  padding = 5;
                }
                $('.field--name-field-featured-small-title').css("opacity", opacity);
                $('.field--name-field-featured-small-title').css("padding-top", padding);
              }
            }
            if (win_bottom >= bg_title) {
              let opacity = ((win_bottom - bg_title - 200)+200)/300;
              if ((opacity >= 0) && (opacity <= 1)) {
                let padding;
                if (opacity > 0 ) {
                  padding = 5/opacity;
                }
                if (opacity >=1) {
                  padding = 0;
                }
                if (padding > 5) {
                  padding = 5;
                }
                $('.field--name-field-featured-big-title').css("opacity", opacity);
                $('.field--name-field-featured-big-title').css("padding-top", padding);
              }
            }
            if (win_bottom >= text) {
              let opacity = ((win_bottom - text - 400)+400)/300;
              if ((opacity >= 0) && (opacity <= 1)) {
                let padding;
                if (opacity > 0 ) {
                  padding = 5/opacity;
                }
                if (opacity >=1) {
                  padding = 0;
                }
                if (padding > 5) {
                  padding = 5;
                }
                $('.col-lg-4 .field--name-body').css("opacity", opacity);
                $('.col-lg-4 .field--name-body').css("padding-top", padding);
              }
            }
            if (win_bottom >= desc) {
              let opacity = ((win_bottom - desc - 200)+200)/300;
              if ((opacity >= 0) && (opacity <= 1)) {
                let padding;
                if (opacity > 0 ) {
                  padding = 5/opacity;
                }
                if (opacity >=1) {
                  padding = 0;
                }
                if (padding > 5) {
                  padding = 5;
                }
                $('.field--name-field-featured-class').css("opacity", opacity);
                $('.field--name-field-featured-class').css("padding-top", padding);
              }
            }
          });
        });
      }
      // window.scrollBy(0, 1); //To init page amimations animations, DO NOT TOUCH

      if (path.includes("/case-studies/")) {
        $(window).once().scroll(function () {
          let height = $(window).scrollTop() + $(window).height();
          let case_paragraph_two_image = $('.paragraph--type--two-images-gray-bg-paragraph-content .field--name-field-cases-with-titles');
          if (case_paragraph_two_image !== undefined) {
            let case_paragraph_two_images_lenght = case_paragraph_two_image.children('.field__item').length;
            let case_paragraph_two_images_content;
            for (let i = 0; i < case_paragraph_two_images_lenght; i++) {
              case_paragraph_two_images_content = $(case_paragraph_two_image.children('.field__item')).eq(i);
              if (height >= $(case_paragraph_two_images_content).offset().top) {
                case_paragraph_two_images_content.removeClass('hide');
              }
            }
          }

          let case_paragraph_big_image_content = $('.paragraph--type--big-image-gray-backround-paragra .cases-description');
          if (case_paragraph_big_image_content.offset() !== undefined) {
            if (height >= $(case_paragraph_big_image_content).offset().top) {
              case_paragraph_big_image_content.removeClass('hide');
            }
          }
        });
      }
      if ((path === "/services")) {
        $(document).ready(function() {
          $(".field-for-js-top").once().bind('click', function(count) {
            $(count.target).closest(".views-row").toggleClass('field-for-js-services');
          });
        });
      }
      if(path.includes("/company")){
        let workers = $('#block-companypageourworkersblock .field--name-field-worker > .field__item');
        let slider = $('#block-views-block-company-images-slider-block-1').offset().top;
        let who_we_are_subtitle = $('#block-whowearecompanyblock h2');
        let who_we_are_title = $('#block-whowearecompanyblock .field--name-field-who-we-are-title');
        let who_we_are_description = $('#block-whowearecompanyblock .field--name-field-who-we-are-description');
        $(window).once().scroll(() => {
          let win_bottom = $(window).height() + $(window).scrollTop();
          workers.each((index, element) => {
            if(win_bottom > ($(element).offset().top + 200)){
              $(element).once().addClass('appear_from_bottom_show');
            }
          });
          if(win_bottom > (slider + 400)){
            animate_children($("#block-views-block-company-images-slider-block-1 .slide__grid"), 'appear_from_right_show', 100);
          }

          if (win_bottom >= who_we_are_subtitle.offset().top) {
            let opacity = ((win_bottom - who_we_are_subtitle.offset().top - 200)+200)/300;
            if ((opacity >= 0) && (opacity <= 1)) {
              let padding;
              if (opacity > 0 ) {
                padding = 5/opacity;
              }
              if (opacity >=1) {
                padding = 0;
              }
              if (padding > 5) {
                padding = 5;
              }
              who_we_are_subtitle.css("opacity", opacity);
              who_we_are_subtitle.css("padding-top", padding);
            }
          }
          if (win_bottom >= who_we_are_title.offset().top) {
            let opacity = ((win_bottom - who_we_are_title.offset().top - 200)+200)/300;
            if ((opacity >= 0) && (opacity <= 1)) {
              let padding;
              if (opacity > 0 ) {
                padding = 5/opacity;
              }
              if (opacity >=1) {
                padding = 0;
              }
              if (padding > 5) {
                padding = 5;
              }
              who_we_are_title.css("opacity", opacity);
              who_we_are_title.css("padding-top", padding);
            }
          }
          if (win_bottom >= who_we_are_description.offset().top) {
            let opacity = ((win_bottom - who_we_are_description.offset().top - 400)+400)/300;
            if ((opacity >= 0) && (opacity <= 1)) {
              let padding;
              if (opacity > 0 ) {
                padding = 5/opacity;
              }
              if (opacity >=1) {
                padding = 0;
              }
              if (padding > 5) {
                padding = 5;
              }
              who_we_are_description.css("opacity", opacity);
              who_we_are_description.css("padding-top", padding);
            }
          }
        });
      }
      // Custom code here

    }
  };

function animate_children(children_arr, class_to_add, delay, current_child = 0){
    setTimeout(()=>{
      $(children_arr[current_child]).once().addClass(class_to_add);
      if(current_child < children_arr.length){
          animate_children(children_arr, class_to_add, delay, current_child + 1);
      }
    }, delay)
  }

})(jQuery, Drupal);
