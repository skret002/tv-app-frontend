(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3c46630a"],{a272:function(e,t,s){"use strict";var i=s("e07e");s.n(i).a},e07e:function(e,t,s){},f87f:function(e,t,s){"use strict";s.r(t);var i=s("69d9"),a={data:()=>({isActive:!1,contentMalfunk:"",showRightBlockPriceForSmoll:!0,showTitlePriceInSmollLcd:!0,selectMalfunkTitle:"",selectedMulfunk:"",selectedBrendName:"",toggleSelectedBrend:!0,selectTypeDevice:"",selectedDevicePrice:"",sizeSelectedIndex:"",selectedBrend:"",brendIndex:"",priceStep2Img:"logo-brand-TV.png",priceStep2:!1,flag_type_lcd_img:!1,type_lcd_img:"",linkMalfPage:Number(),dataMalfunk:null}),methods:{getMalfunk(){i.a.post("/malfunk_in_price/",{params:{selectedBrend:this.selectedBrend,selectTypeDevice:this.selectTypeDevice}}).then((e=>{this.dataMalfunk=e.data,this.$store.state.home.malfunkPage=e.data}))},async scrollToBlock(){if(this.$route.params.id){var e=this.$route.params.id;this.$nextTick((()=>document.getElementById(e).scrollIntoView({block:"start"})))}},GetMalfank(e,t){this.selectedMulfunk=e,this.selectMalfunkTitle=t;try{this.$refs.priceStep3List.classList.add("zoomOutLeft","animated","2s"),this.$refs.divAfteSelectMalfunkImg.classList.add("zoomOutRight","animated","2s"),setTimeout((()=>{this.$refs.priceStep3List.classList.add("d-none"),this.$refs.divAfteSelectMalfunkImg.classList.add("d-none"),this.$store.commit("SET_MALFUNK",{data:[this.selectedBrend,e,this.selectTypeDevice]}),this.$refs.priceStep4List.classList.remove("d-none"),this.$refs.priceStep4Img.classList.remove("d-none")}),1800)}catch(t){this.$refs.priceStep3List.classList.add("zoomOutLeft","animated","2s"),this.$refs.priceStep3List.classList.add("d-none"),this.$store.commit("SET_MALFUNK",{data:[this.selectedBrend,e,this.selectTypeDevice]}),this.$refs.priceStep4List.classList.remove("d-none")}"Проектор"==this.selectTypeDevice&&setTimeout((()=>{this.GetPriceAndInfo(this.$store.getters.MALFUNK_SIZE[0])}),2e3)},GetPriceAndInfo(e){this.selectedDevicePrice=e;try{this.$refs.RightPriceBlock.classList.add("zoomOutLeft","animated","3s"),this.$refs.LeftPriceBlock.classList.add("zoomOutRight","animated","3s"),this.$refs.FinaliShowPrice.classList.remove("d-none"),this.$refs.FinaliShowPrice.classList.add("bounceInDown","animated","3s"),this.showRightBlockPriceForSmoll=!0,setTimeout((()=>{this.$refs.RightPriceBlock.classList.add("d-none"),this.$refs.LeftPriceBlock.classList.add("d-none")}),300)}catch(e){this.$refs.RightPriceBlock.classList.add("zoomOutLeft","animated","3s"),setTimeout((()=>{this.$refs.RightPriceBlock.classList.add("d-none"),this.$refs.LeftPriceBlock.classList.add("d-none")}),300),this.showRightBlockPriceForSmoll=!0,this.$refs.FinaliShowPrice.classList.remove("d-none"),this.$refs.FinaliShowPrice.classList.add("bounceInDown","animated","3s"),this.showTitlePriceInSmollLcd=!1}},SetBrendImg(e){this.priceStep2Img="http://rem4u.ru:8000"+e},SelectedBrend(e){this.brendIndex=e;try{this.$refs.priceStep2Img.classList.add("fadeOutRightBig","animated","3s"),this.$refs.priceStep2List.classList.add("fadeOutLeftBig","animated","3s"),setTimeout((()=>{this.$refs.priceStep2Img.classList.add("d-none"),this.$refs.priceStep2List.classList.add("d-none")}),250)}catch(e){this.$refs.priceStep2List.classList.add("fadeOutLeftBig","animated","3s"),setTimeout((()=>{this.$refs.priceStep2List.classList.add("d-none")}),300)}},SetPreImgLcdType(){!1===this.flag_type_lcd_img&&(this.type_lcd_img=this.$store.getters.TYPE_LCD[1].type_lcd_img,this.flag_type_lcd_img=!0)},SetImageTypeLcd(e){this.type_lcd_img=e},GetBrend(e){this.typeLcdId=e,4===e&&(this.selectedBrend=18,this.selectTypeDevice="Проектор",this.priceStep2=!1,setTimeout((()=>{this.$refs.priceStep2List.classList.add("d-none"),this.$refs.priceStep2Img.classList.add("d-none")}),500),this.getMalfunk()),this.$store.commit("SET_TYPE_SIZE",e);try{this.$refs.floatRight.classList.add("fadeOutRightBig","animated","3s"),this.$refs.floatLeft.classList.add("fadeOutLeftBig","animated","3s"),setTimeout((()=>{this.$refs.floatRight.classList.add("d-none"),this.$refs.floatLeft.classList.add("d-none")}),250)}catch(e){this.$refs.floatLeft.classList.add("fadeOutLeftBig","animated","3s"),setTimeout((()=>{this.$refs.floatLeft.classList.add("d-none")}),250)}setTimeout((()=>{this.priceStep2=!0}),250)},TrackingScroll(){var e=document.getElementsByClassName("price")[0];!0===this.CheckVisibility(e)&&this.SetPreImgLcdType()},CheckVisibility(e){var t=window.scrollY;return e.offsetTop-window.innerHeight/2<=t},onResize(){window.screen.height<window.screen.width?window.screen.width>600&&window.screen.width<700&&(this.showRightBlockPriceForSmoll=!1):window.screen.width>360&&window.screen.width<420&&(this.showRightBlockPriceForSmoll=!1),window.screen.width>=320&&window.screen.width<360&&(this.showRightBlockPriceForSmoll=!1),window.screen.width<320&&(this.showRightBlockPriceForSmoll=!1),window.screen.width>781&&window.screen.width<850&&(this.showRightBlockPriceForSmoll=!1),window.screen.width>760&&window.screen.width<780&&(this.showRightBlockPriceForSmoll=!1),window.screen.width<=600&&window.screen.width>=420&&(this.showRightBlockPriceForSmoll=!1),window.screen.width<=420&&window.screen.width>=320&&(this.showRightBlockPriceForSmoll=!1),window.screen.width<=960&&(this.showRightBlockPriceForSmoll=!1),setTimeout(this.CorectionPositionTextInSlider,1e3)}},created(){this.scrollToBlock(),window.addEventListener("orientationchange",(function(){location.reload()}),!1),this.handleDebouncedScroll=this.TrackingScroll,window.addEventListener("scroll",this.handleDebouncedScroll)},mounted(){this.onResize()}},c=(s("a272"),s("2877")),n=s("6544"),l=s.n(n),r=s("8336"),o=s("b0af"),d=s("99d9"),h=s("62ad"),f=s("a523"),m=s("0e8f"),_=s("a722"),u=s("0fd9"),p=Object(c.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"hidden-md-and-up"}),s("div",{directives:[{name:"lazyrequest",rawName:"v-lazyrequest"}],staticClass:"price",attrs:{"data-r":"GET_TYPE_LCD",id:"price"}},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[e.showTitlePriceInSmollLcd?s("h2",{staticClass:"price_title"},[e._v(" Стоимость ремонта для вашего случая ")]):e._e()])],1)],1),s("v-container",{staticClass:"gutter_ten",attrs:{"grid-list-md":"","text-xs-center":""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{ref:"RightPriceBlock",attrs:{md4:"",xs12:"",sm8:"","offset-sm2":"","offset-xs0":"","offset-md1":""}},[s("v-card",{staticClass:"price_block_height"},[s("v-card-text",{staticClass:"px-0 v-card__price"},[s("ul",{ref:"floatLeft",staticClass:"list4a",attrs:{id:"to"}},[s("h3",[e._v("Выбрать тип аппарата")]),e._l(e.$store.getters.TYPE_LCD,(function(t,i){return s("a",{key:i,staticClass:"action_type",on:{click:function(s){e.GetBrend(t.id),e.selectTypeDevice=t.type_lcd},mouseover:function(s){return e.SetImageTypeLcd(t.type_lcd_img)}}},[s("li",{attrs:{value:t.type_lcd_img}},[e._v(" "+e._s(t.type_lcd)+" ")])])}))],2),1==e.priceStep2?s("ul",{ref:"priceStep2List",staticClass:"list4a bounceInLeft animated  3s",attrs:{id:"priceStep2"}},[s("h3",[e._v("Выбрать бренд производителя")]),e._l(e.$store.getters.TYPE_SIZE,(function(t,i){return s("a",{key:i,staticClass:"action_type",on:{mouseover:function(s){return e.SetBrendImg(t.brend_size.brend_name.logo.logo_brend)}}},[s("li",{attrs:{value:t},on:{click:function(s){e.selectedBrend=t.brend_size.brend_name.id,e.selectedBrendName=t.brend_size.brend_name.brend_name,e.SelectedBrend(i),e.getMalfunk()}}},[e._v(" "+e._s(t.brend_size.brend_name.brend_name)+" ")])])}))],2):e._e(),e.selectedBrend?s("ul",{ref:"priceStep3List",staticClass:"list4a bounceInLeft animated  3s ",attrs:{id:"priceStep3"}},[s("h3",[e._v(" Выбрать неисправнсть ")]),e._l(e.dataMalfunk,(function(t,i){return s("a",{key:i,staticClass:"action_type",on:{click:function(s){return e.GetMalfank(t.malfunk.id,t.malfunk.title)}}},[s("li",{on:{mouseover:function(s){e.contentMalfunk=t.malfunk.content,e.linkMalfPage=i}}},[e._v(" "+e._s(t.malfunk.title)+" ")])])}))],2):e._e(),s("ul",{ref:"priceStep4List",staticClass:"list4a bounceInLeft animated  3s  d-none",attrs:{id:"priceStep4"}},[e.selectedMulfunk?s("h3",[e._v(" Выбрать диагональ ")]):e._e(),e._l(e.$store.getters.MALFUNK_SIZE,(function(t,i){return s("a",{key:i,staticClass:"action_type",on:{click:function(s){return e.GetPriceAndInfo(t)}}},[s("li",[e._v(' диагональ "'+e._s(t.size)+'" ')])])}))],2)])],1)],1),e.showRightBlockPriceForSmoll?s("v-flex",{ref:"LeftPriceBlock",attrs:{md6:"",xs12:""}},[s("v-card",{staticClass:"right_price_info centre price_block_height",staticStyle:{width:"95%",float:"right"}},[s("img",{ref:"floatRight",staticClass:"white--text",staticStyle:{width:"85%",height:"85%"},attrs:{src:e.type_lcd_img,alt:""}}),1==e.priceStep2?s("img",{ref:"priceStep2Img",staticClass:"white--text bounceInRight animated  3s",staticStyle:{width:"85%",height:"85%"},attrs:{src:e.priceStep2Img,alt:""}}):e._e(),s("div",{ref:"divAfteSelectMalfunkImg"},[e.selectedBrend?s("img",{directives:[{name:"show",rawName:"v-show",value:!e.contentMalfunk,expression:"!contentMalfunk"}],ref:"afteSelectMalfunkImg",staticClass:"white--text",staticStyle:{width:"85%",height:"85%"},attrs:{src:"malfunc.png",alt:"Диагностика телевизора, туристская 18"}}):e._e(),s("div",{staticClass:"content",staticStyle:{position:"absolute","max-height":"73%",overflow:"hidden",margin:"10px"},domProps:{innerHTML:e._s(e.contentMalfunk)}}),e.selectedBrend?s("router-link",{staticStyle:{position:"absolute",bottom:"8%",left:"20%"},attrs:{to:{name:"malfunc",params:{id:e.linkMalfPage}}}},[s("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo"}},[e._v(" см. подробнее о неисправности ")])],1):e._e(),e.selectedBrend?s("h5",{staticClass:"h5InImg",staticStyle:{position:"absolute",bottom:"0",left:"25%"}},[e._v(" Внимание: Диагностика бесплатна! ")]):e._e()],1),e.selectedMulfunk?s("img",{ref:"priceStep4Img",staticClass:"white--text bounceInRight animated  3s d-none search",staticStyle:{width:"85%",height:"85%"},attrs:{src:"DiagonaliTVinch.png",alt:"Диагональ экрана в сантиметрах"}}):e._e(),e.selectedMulfunk?s("h5",{staticClass:"h5InImg"},[e._v(" Диагональ ТВ можно узнать по первым цифрам в модели! ")]):e._e()])],1):e._e(),s("v-flex",{ref:"FinaliShowPrice",staticClass:"d-none finali_show_price",attrs:{md12:""}},[s("v-row",[s("v-flex",{staticClass:"hidden-for-small-down",attrs:{md6:""}},[s("v-card",{staticClass:"centre"},[s("h2",[e._v("Сверим данные:")]),s("ul",{staticClass:"price_sub_title"},[s("h4",[s("i",{staticClass:"material-icons",attrs:{id:"icon_done"}},[e._v("done")]),e._v("Тип аппарата: "+e._s(e.selectTypeDevice)+" ")]),s("h4",[s("i",{staticClass:"material-icons",attrs:{id:"icon_done"}},[e._v("done ")]),e._v(" Бренд производителя: "),"Проектор"!=e.selectTypeDevice?s("p",[e._v(e._s(e.selectedBrendName))]):s("p",[e._v(" Для всех брендов")])]),"Проектор"!=e.selectTypeDevice?s("h4",[s("i",{staticClass:"material-icons",attrs:{id:"icon_done"}},[e._v("done")]),e._v(' Диагональ "'+e._s(e.selectedDevicePrice.size)+'" ')]):e._e(),s("h4",[s("i",{staticClass:"material-icons",attrs:{id:"icon_done"}},[e._v("done")]),e._v('Неисправность: "'+e._s(e.selectMalfunkTitle)+'" ')])])])],1),s("v-flex",{attrs:{md6:""}},[s("v-card",{staticClass:"centre"},[s("h2",[e._v("Стоимость ремонта:")]),s("ul",{staticClass:"price_sub_title_too"},[s("h4",[s("i",{staticClass:"material-icons",attrs:{id:"icon_done"}},[e._v("search")]),e._v("Стоимость диагностики: 0 руб. ")]),s("h4",[s("i",{staticClass:"material-icons",attrs:{id:"icon_done"}},[e._v("attach_money")]),e._v("Стоимость ремонта приблизительно: "+e._s(e.selectedDevicePrice.price)+"руб. ")]),s("h4",[s("i",{staticClass:"material-icons",attrs:{id:"icon_done"}},[e._v("build")]),e._v(" Ремонт продлится: 1-3 дня. ")])]),s("div",{staticClass:"price_sub_info"},[s("h5",[e._v("Внимание:")]),s("p",[e._v(" После принятия аппарата в сервисный центр, наши специалисты обязательно проведут тщательную диагностику, это необходимо для точного определиния как стоимости, так и времени ремонта. Сама же диагностика для Вас будет стоить 0 руб. , даже в случаи отказа от дальнейшего ремонта. Однако если вы выбрали услугу по доставки вашего аппарата в сервис курьером, "),s("b",[e._v("услуга оплачивается Вами в независимоти от результата. ")])]),s("hr"),s("p",[e._v("Сам же процесс ремонта, начнется только после вашего устного согласия с ценой и сроком!")])])])],1)],1)],1)],1)],1)],1)}),[],!1,null,"c91c215e",null);t.default=p.exports,l()(p,{VBtn:r.a,VCard:o.a,VCardText:d.c,VCol:h.a,VContainer:f.a,VFlex:m.a,VLayout:_.a,VRow:u.a})}}]);