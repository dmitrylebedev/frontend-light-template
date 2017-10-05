import { ready, changeBtnText } from './helpers';
import $ from 'jquery';
import select2 from 'select2';

ready(function () {
  
  (function(){
    $(".js-placeholder-single").select2({
      placeholder: function(){
        $(this).data('placeholder');
      },
      allowClear: false,
      minimumResultsForSearch: -1
    }).on('select2:close', function (evt) {
      if ($(this).val()) {
        $(this).closest('.js-single-select').addClass('single-select_selected')
      }
    }).on('select2:select', function (evt) {
  
      $(this)
        .closest('.js-single-select')
        .find('.single-select__placeholder')
        .text($(this).data('placeholder'));
  
    }).on('change', function (evt) {
      if ($(this).val()) {
        $(this).closest('.js-single-select').addClass('single-select_selected')
      } else {
        $(this).closest('.js-single-select').removeClass('single-select_selected')
      }
    })
  })();
  
  (function(){
    let select = $(".js-placeholder-multiple-select");
    let placeholderText = select.closest('.js-multiple-select').find('.multiple-select__placeholder').text();
    select.select2({
      placeholder: placeholderText,
      allowClear: false,
      minimumResultsForSearch: -1,
      closeOnSelect: false
    }).on('select2:opening', function (evt) {
      $(this).closest('.js-multiple-select').addClass('multiple-select_open');
    }).on('select2:open', function (evt) {
      $('.select2-container.select2-container--default.select2-container--open').addClass('multiple')
    }).on('select2:closing', function (evt) {
      $(this).closest('.js-multiple-select').removeClass('multiple-select_open')
      if ($(this).val()) {
        $(this).closest('.js-multiple-select').addClass('multiple-select_selected')
        if ($(this).val().length) {
          $(this).closest('.js-multiple-select').addClass('multiple-select_selected')
        } else {
          $(this).closest('.js-multiple-select').removeClass('multiple-select_selected')
        }
      }
    }).on('change', function (evt) {
      if ($(this).val().length) {
        $(this).closest('.js-multiple-select').addClass('multiple-select_selected')
      } else {
        $(this).closest('.js-multiple-select').removeClass('multiple-select_selected')
      }
    }).on('select2:close', function () {
      console.log($(this).val());
    });
  
    $('.js-multiple-select .select2-search__field').prop('readonly', true)
    
    $('#btn-2').on('click', function () {
      select.val(0).trigger("change")
    })
  })();
});
