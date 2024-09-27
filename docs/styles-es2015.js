(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".background-blur {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  min-width: 100%;\n  min-height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.section {\n  position: relative;\n  background-color: #fff4e3;\n  margin: 0 auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.74);\n  background-image: url('bg1-red.jpg');\n  background-repeat: repeat;\n  background-position: top left;\n  background-size: 300px auto;\n  color: #fff4e3;\n  text-shadow: 2px 2px #000000;\n  height: auto;\n  width: auto;\n}\n\n@media (max-width: 599px) {\n  .section {\n    height: 100vh;\n  }\n}\n\n.left-line {\n  position: absolute;\n  width: 20px;\n  height: calc(100% - 34px);\n  left: 0;\n  top: 17px;\n  background-image: url('linetransp.png');\n  background-repeat: repeat-y;\n  background-position: top left;\n  background-size: 100% auto;\n}\n\n.right-line {\n  position: absolute;\n  width: 20px;\n  height: calc(100% - 34px);\n  right: 0;\n  top: 17px;\n  background-image: url('linetransp.png');\n  background-repeat: repeat-y;\n  background-position: top left;\n  background-size: 100% auto;\n  transform: scaleX(-1);\n}\n\n.bottom-line {\n  position: absolute;\n  width: calc(100% - 34px);\n  height: 20px;\n  left: 17px;\n  bottom: 0;\n  background-image: url('linetransp2.png');\n  background-repeat: repeat-x;\n  background-position: top left;\n  background-size: auto 100%;\n  transform: scaleY(-1);\n}\n\n.top-line {\n  position: absolute;\n  width: calc(100% - 34px);\n  height: 20px;\n  left: 17px;\n  top: 0;\n  background-image: url('linetransp2.png');\n  background-repeat: repeat-x;\n  background-position: top left;\n  background-size: auto 100%;\n}\n\n.corner-line {\n  position: absolute;\n  width: 85px;\n  height: 85px;\n  background-image: url('line&corners3.png');\n  background-repeat: no-repeat;\n  background-position: top left;\n  background-size: 100%;\n  z-index: 2;\n  pointer-events: none;\n}\n\n.corner-line--lt {\n  left: 0;\n  top: 0;\n  transform: rotate(90deg);\n}\n\n.corner-line--lb {\n  left: 0;\n  bottom: 0;\n  background-position: 0 100%;\n}\n\n.corner-line--rt {\n  right: 0;\n  top: 0;\n  transform: rotate(180deg);\n}\n\n.corner-line--rb {\n  right: 0;\n  bottom: 0;\n  transform: rotate(270deg);\n}\n\n@font-face {\n  font-family: Lora;\n  src: url('Lora-Regular.ttf') format(\"opentype\");\n}\n\nbody {\n  position: relative;\n  margin: 0;\n  background-image: url('bg1.jpg');\n  background-repeat: repeat;\n  background-size: 400px auto;\n  box-sizing: border-box;\n  color: #fff4e3;\n  height: 100%;\n  min-height: 100vh;\n}\n\nbody * {\n  box-sizing: border-box;\n  font-family: \"Lora\", serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9EOlxcUHJvZ3JhbW93YW5pZVxcUE9SVEZPTElPIEhFUk9FU1xcZ2l0aHViMjAyNFxccG9ydGZvbGlvLWhlcm9lcy9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGNvbXBvbmVudHNcXF9kaWFsb2dzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiLCJzcmMvRDpcXFByb2dyYW1vd2FuaWVcXFBPUlRGT0xJTyBIRVJPRVNcXGdpdGh1YjIwMjRcXHBvcnRmb2xpby1oZXJvZXMvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxhYnN0cmFjdFxcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL0Q6XFxQcm9ncmFtb3dhbmllXFxQT1JURk9MSU8gSEVST0VTXFxnaXRodWIyMDI0XFxwb3J0Zm9saW8taGVyb2VzL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcYWJzdHJhY3RcXF9taXhpbnMuc2NzcyIsInNyYy9EOlxcUHJvZ3JhbW93YW5pZVxcUE9SVEZPTElPIEhFUk9FU1xcZ2l0aHViMjAyNFxccG9ydGZvbGlvLWhlcm9lcy9zcmNcXHN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLG9DQUFBO0FDREY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLHlCRVhXO0VGWVgsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFHQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0V2Qlc7RUZ3QlgsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBRXpCRTtFSFVGO0lBbUJNLGFBQUE7RUNBSjtBQUNGOztBRDJCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQ3hCRjs7QUQwQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ3ZCRjs7QUR5QkE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ3RCRjs7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUNyQkY7O0FEdUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDcEJGOztBRHFCRTtFQUNFLE9BQUE7RUFDQSxNQUFBO0VBQ0Esd0JBQUE7QUNuQko7O0FEcUJFO0VBQ0UsT0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ25CSjs7QURxQkU7RUFDRSxRQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0FDbkJKOztBRHFCRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUNuQko7O0FHaEhBO0VBQ0UsaUJBQUE7RUFDQSwrQ0FBQTtBSG1IRjs7QUdoSEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGNGWFc7RUVZWCxZQUFBO0VBQ0EsaUJBQUE7QUhrSEY7O0FHaEhBO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtBSG1IRiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi9hYnN0cmFjdC9taXhpbnMuc2Nzc1wiO1xyXG4uYmFja2dyb3VuZC1ibHVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICAvL2ZpbHRlcjogYmx1cigzcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAvLy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XHJcbiAgLy9iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcclxufVxyXG4uc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWxpZ2h0O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDRweCAwIHJnYmEoMCwwLDAsMC43NCk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNHB4IDAgcmdiYSgwLDAsMCwwLjc0KTtcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNHB4IDAgcmdiYSgwLDAsMCwwLjc0KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9iZzEtcmVkLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwcHggYXV0bztcclxuICBjb2xvcjogJHRleHQtbGlnaHQ7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggJGJsYWNrO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBAaW5jbHVkZSBwaG9uZSB7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC8vJjo6YmVmb3JlIHtcclxuICAvLyAgY29udGVudDogJyc7XHJcbiAgLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgd2lkdGg6IDIwcHg7XHJcbiAgLy8gIGhlaWdodDogY2FsYygxMDAlIC0gMzRweCk7XHJcbiAgLy8gIGxlZnQ6IDA7XHJcbiAgLy8gIHRvcDogMTdweDtcclxuICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYm9yZGVycy9saW5ldHJhbnNwLnBuZ1wiKTtcclxuICAvLyAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gIC8vICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcclxuICAvLyAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XHJcbiAgLy99XHJcbiAgLy8mOjphZnRlciB7XHJcbiAgLy8gIGNvbnRlbnQ6ICcnO1xyXG4gIC8vICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gIHdpZHRoOiAyMHB4O1xyXG4gIC8vICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xyXG4gIC8vICByaWdodDogMDtcclxuICAvLyAgdG9wOiAxN3B4O1xyXG4gIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9ib3JkZXJzL2xpbmV0cmFuc3AucG5nXCIpO1xyXG4gIC8vICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XHJcbiAgLy8gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xyXG4gIC8vICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuICAvLyAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gIC8vfVxyXG59XHJcbi5sZWZ0LWxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxN3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2JvcmRlcnMvbGluZXRyYW5zcC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xyXG59XHJcbi5yaWdodC1saW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNHB4KTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDE3cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYm9yZGVycy9saW5ldHJhbnNwLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG59XHJcbi5ib3R0b20tbGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzNHB4KTtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGVmdDogMTdweDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYm9yZGVycy9saW5ldHJhbnNwMi5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxufVxyXG4udG9wLWxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzRweCk7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxlZnQ6IDE3cHg7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2JvcmRlcnMvbGluZXRyYW5zcDIucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcclxufVxyXG4uY29ybmVyLWxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogODVweDtcclxuICBoZWlnaHQ6IDg1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYm9yZGVycy9saW5lJmNvcm5lcnMzLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICYtLWx0IHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgfVxyXG4gICYtLWxiIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgfVxyXG4gICYtLXJ0IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgJi0tcmIge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIH1cclxufVxyXG4iLCIuYmFja2dyb3VuZC1ibHVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNGUzO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjc0KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjc0KTtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC43NCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2JnMS1yZWQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDBweCBhdXRvO1xuICBjb2xvcjogI2ZmZjRlMztcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggIzAwMDAwMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuXG4ubGVmdC1saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNHB4KTtcbiAgbGVmdDogMDtcbiAgdG9wOiAxN3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9ib3JkZXJzL2xpbmV0cmFuc3AucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbn1cblxuLnJpZ2h0LWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xuICByaWdodDogMDtcbiAgdG9wOiAxN3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9ib3JkZXJzL2xpbmV0cmFuc3AucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuXG4uYm90dG9tLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzNHB4KTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsZWZ0OiAxN3B4O1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2JvcmRlcnMvbGluZXRyYW5zcDIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xufVxuXG4udG9wLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzNHB4KTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsZWZ0OiAxN3B4O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL2JvcmRlcnMvbGluZXRyYW5zcDIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbn1cblxuLmNvcm5lci1saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogODVweDtcbiAgaGVpZ2h0OiA4NXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9ib3JkZXJzL2xpbmUmY29ybmVyczMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5jb3JuZXItbGluZS0tbHQge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi5jb3JuZXItbGluZS0tbGIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcbn1cbi5jb3JuZXItbGluZS0tcnQge1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLmNvcm5lci1saW5lLS1yYiB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTG9yYTtcbiAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvTG9yYS1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbmJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9iZzEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmNGUzO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xufSIsIiRibGFjazogIzAwMDAwMDtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG5cclxuJHRleHQtbGlnaHQ6ICNmZmY0ZTM7XHJcbiR0ZXh0LXJlZDogI2ZmMjkzNTtcclxuJHRleHQtc2hhZG93LWxpZ2h0OiAjZmZmZmZmYWQ7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAjZGVhZjYzO1xyXG4kYm9yZGVyLWNvbG9yLWJyb256ZTogIzc2Njk1MztcclxuJGJvcmRlci1jb2xvci1kYXJrLWJyb256ZTogcmdiKDYzLCA0MSwgMjEpO1xyXG5cclxuJGJhY2tncm91bmQtb3JhbmdlOiAjYTU4eDk0MjtcclxuXHJcbiRpY29uLWNvbG9yOiAjZmZlNzk0bDtcclxuXHJcbiRsaW5lLWNvbG9yLWRhcms6ICMyYTI1MWU7XHJcbiRsaW5lLWNvbG9yLWxpZ2h0OiAjNzM2ZTY2O1xyXG4kbGluZS1jb2xvci1saWdodGVzdDogcmdiYSg0MSwgMzQsIDI0LCAwLjIzKTtcclxuXHJcblxyXG4iLCJcclxuQG1peGluIHBob25lIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxldHMge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGxhcHRvcHMge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY1cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNtYWxsLWRlc2t0b3Age1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNTM1cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGxhcmdlLWRlc2t0b3Age1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4gLy8gTUVESUEgRk9SIEhFSUdIVFxyXG5AbWl4aW4gc21hbGwtcGhvbmUge1xyXG4gIEBtZWRpYSAobWF4LWhlaWdodDogNjA3cHgpIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCJzcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWFpbi5zY3NzXCI7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogTG9yYTtcclxuICBzcmM6IHVybChcImFzc2V0cy9mb250cy9Mb3JhLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYmcxLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwcHggYXV0bztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAkdGV4dC1saWdodDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuYm9keSAqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcbn1cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programowanie\PORTFOLIO HEROES\github2024\portfolio-heroes\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map