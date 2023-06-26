const sliderElement = document.querySelector('.filter-form__range');
const lowerValueElement = document.querySelector('.filter-form__value--lower');
const upperValueElement = document.querySelector('.filter-form__value--upper');
let valueInputs = [lowerValueElement, upperValueElement];

noUiSlider.create(sliderElement, {
  start: [0, 123],
  connect: true,
  range: {
      'min': 0,
      'max': 150
  },
  step: 1,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', function (values, handle) {
  valueInputs[handle].value = values[handle];
});
