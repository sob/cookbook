var lunrIndex=null,lunrData=null;$.ajax({url:"/search.json",cache:!0,method:"GET",success:function(e){lunrData=e,lunrIndex=lunr.Index.load(lunrData.index)}}),$(document).ready(function(){$("input#search").on("keyup",function(){var e=$(this).val(),n=lunrIndex.search(e),r=$(".searchresults"),a=$("#result-count");if(0===n.length)r.hide(),a.hide();else{a.html("results: "+n.length),r.empty();for(var l in n){var u=n[l].ref,t=lunrData.docs[u],s='<a class="list-group-item" href="'+t.url+'">'+t.title+"</a><br>";r.append(s)}r.show()}})});