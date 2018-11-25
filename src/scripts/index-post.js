import $ from 'jquery'
import listSearch from './modules/list-search'
import 'autotrack/lib/plugins/event-tracker'
import 'autotrack/lib/plugins/outbound-link-tracker'

window.jQuery = $
window.$ = $

$(document).ready(function () {
  listSearch()
})
