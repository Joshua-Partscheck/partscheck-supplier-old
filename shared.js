(function(){
  var creditIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><text x="9" y="16" font-size="7" fill="#fff" stroke="none" font-weight="bold">$</text></svg>';

  var html = '<div class="panels">'
    + '<div class="panel">'
    +   '<div class="panel-hdr"><span class="picon">\uD83D\uDCCB</span><span class="ptitle">Quotes</span></div>'
    +   '<div class="panel-row"><a href="quotes.html">New Quote Request</a><span class="bdg">4</span></div>'
    +   '<div class="panel-row"><a href="#">Quotes In Progress</a><span class="bdg bdg-o">7</span></div>'
    + '</div>'
    + '<div class="panel">'
    +   '<div class="panel-hdr"><span class="picon">\uD83D\uDCE6</span><span class="ptitle">My Orders</span></div>'
    +   '<div class="panel-row"><a href="index.html">All Orders</a><span class="bdg">54</span></div>'
    +   '<div class="panel-row"><a href="#">ETA Requests</a></div>'
    +   '<div class="panel-row"><a href="#">ETA Overdue</a><span class="bdg">20</span></div>'
    + '</div>'
    + '<div class="panel">'
    +   '<div class="panel-hdr"><span class="picon">' + creditIcon + '</span><span class="ptitle">Credit Management</span></div>'
    +   '<div class="panel-row"><a href="#">All Credit Requests</a><span class="bdg">10</span></div>'
    +   '<div class="panel-row"><a href="#">Credits Not Opened</a><span class="bdg">15</span></div>'
    +   '<div class="panel-row"><a href="#">Credits Opened</a><span class="bdg bdg-o">7</span></div>'
    + '</div>'
    + '<div class="panel">'
    +   '<div class="panel-hdr"><span class="picon">\uD83D\uDD27</span><span class="ptitle">Reports &amp; Tools</span></div>'
    +   '<div class="panel-row"><a href="#">Contact Us</a></div>'
    +   '<div class="panel-row"><a href="#">New Messages</a><span class="bdg">12</span></div>'
    +   '<div class="panel-row"><a href="#">New Feedback</a><span class="bdg">37</span></div>'
    +   '<div class="panel-row"><a href="#">Fill Rate Reporting</a></div>'
    + '</div>'
    + '</div>';

  var el = document.getElementById('shared-panels');
  if(el) el.outerHTML = html;
})();
