/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Clase usada para la funcionalidad de jquerySteps in Translate Profiler 
function stepsTranslateProfiler(containerSteps) {

  //
  function defaultOptionsSteps() {
    var optionsSteps = {
      headerTag: "h3",
      bodyTag: "section",
      transitionEffect: "slideLeft",
      stepsOrientation: "vertical"
    };

    return optionsSteps;
  }

  function optionsvalidate() {
    var optValidate = {
      errorPlacement: function errorPlacement(error, element) {
        element.before(error);
      },
      rules: {
        confirm: {
          equalTo: "#password"
        }
      }
    };

    return optValidate;
  }

  //
  function optionsStepsProcess() {
    var optionsEvent = {
      onFinishing: function(event, currentIndex) {
        var finishing = eventOnFinishing(event, currentIndex);
        return finishing;
      },
      onFinished: function(event, currentIndex) {
        var finished = eventOnFinished(event, currentIndex);
        return finished;
      },
      onStepChanging: function(event, currentIndex, newIndex) {
        var stepChanging = eventOnStepChanging(event, currentIndex, newIndex);
        return stepChanging;
      }
    };

    return optionsEvent;
  }

  //
  function eventOnStepChanging(event, currentIndex, newIndex) {
    containerSteps.validate().settings.ignore = ":disabled,:hidden";
    return containerSteps.valid();
  }

  //
  function eventOnFinishing(event, currentIndex) {
    containerSteps.validate().settings.ignore = ":disabled";
    return containerSteps.valid();
  }

  //
  function eventOnFinished(event, currentIndex) {
    alert("Submitted!");
  }

  //
  function finalOptionsSteps() {
    var defaultSteps = defaultOptionsSteps();
    var processSteps = optionsStepsProcess();

    defaultSteps.onFinishing = processSteps.onFinishing;
    defaultSteps.onFinished = processSteps.onFinished;
    defaultSteps.onStepChanging = processSteps.onStepChanging;
    defaultSteps.onStepChanged = processSteps.onStepChanged;

    return defaultSteps;
  }

  //
  this.createStepsTranslator = function() {
    var optStep = finalOptionsSteps();
    var optValidate = optionsvalidate();

    containerSteps.validate(optValidate);
    containerSteps.children("div").steps(optStep);
  }
}

//Ejecucion del codigo js cuando cargue el DOM
$(function() {
  var stepsTranslate = new stepsTranslateProfiler($('#formTranslatorAccount'));
  stepsTranslate.createStepsTranslator();
});