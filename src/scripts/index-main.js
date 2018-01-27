import menu from './modules/menu'
import anchorScroll from './modules/anchor-scroll'
import 'autotrack/lib/plugins/event-tracker'
import 'autotrack/lib/plugins/outbound-link-tracker'

$(document).ready(function () {
  menu()
  anchorScroll()
})
