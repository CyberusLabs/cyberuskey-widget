import './styles/widget.scss';

const widgetHtml = require("html-loader!./templates/widget.html");


export class CyberusKeyWidget {
  append() {
    console.log(widgetHtml);
  }
}