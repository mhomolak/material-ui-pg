import MyComponent from '../main';

function init() {

  // Demo eventing API
  document.body.dispatchEvent(new CustomEvent('o.InitMyComponent', {
    detail: {
      elementId: 'demo-target1'
    }
  }));

  // Demo direct API
  new MyComponent({
    elementId: 'demo-target2'
  });

}

window.onload = init;
