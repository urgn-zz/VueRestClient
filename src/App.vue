<template>
  <div>
    <header>
      <h1>User REST Api client</h1>
    </header>
    <router-view></router-view>
    <footer>
      (c) 2018
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: sans-serif;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: #f1f1f1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  header {
    overflow: hidden;
    background-color: #5F5F5F;
    padding: 20px 10px;
  }
  h1 {
    text-align: center;
    border-radius: 4px;
    font-size: 25px;
    font-weight: bold;
    color: #FFFFFF;
  }
  h2 {
    padding: 9px 0 9px 0px;
    font-size: 18px;
    font-weight: 800;
  }
  #app {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #FFFFFF;
    padding: 9px 18px 18px 18px;
  }
  footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #6F6F6F;
    color: #FFFFFF;
    text-align: center;
    padding: 9px 0px 9px 0px;
    font-size: 12px;
    font-weight: 400;
    margin-top: 18px;
  }
  .btn {
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 4px 8px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 12px;
    min-width: 75px;
  }

  /* Green */
  .success {
    border-color: #4CAF50;
    color: green;
  }

  .success:hover {
    background-color: #4CAF50;
    color: white;
  }

  /* Blue */
  .info {
    border-color: #2196F3;
    color: dodgerblue
  }

  .info:hover {
    background: #2196F3;
    color: white;
  }

  /* Orange */
  .warning {
    border-color: #ff9800;
    color: orange;
  }

  .warning:hover {
    background: #ff9800;
    color: white;
  }

  /* Red */
  .danger {
    border-color: #f44336;
    color: red
  }

  .danger:hover {
    background: #f44336;
    color: white;
  }

  /* Gray */
  .default {
    border-color: #e7e7e7;
    color: black;
  }

  .default:hover {
    background: #e7e7e7;
  }

  .on-top {
    float: right;
    margin: -28px 0;
  }

  .v--modal {
    height: 120px !important;
  }

  .message {
    padding: 18px;
    width: 100%;
    font-size: 16px;
  }

  .modal-controls {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 12px;
  }
</style>
