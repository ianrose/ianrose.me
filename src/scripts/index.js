import $ from 'jquery'
import 'lazysizes'
import menu from './modules/menu'
import anchorScroll from './modules/anchor-scroll'
import listSearch from './modules/list-search'
import 'autotrack/lib/plugins/event-tracker'
import 'autotrack/lib/plugins/outbound-link-tracker'

window.jQuery = $
window.$ = $

$(document).ready(function () {
  menu()
  anchorScroll()
  listSearch()
})
