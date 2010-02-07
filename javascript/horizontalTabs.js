function doHorizontalTabs() {
$(document).ready(function() {
$(".test").hrzAccordion(
{eventTrigger:"mouseover",
openOnLoad:"",
cycle: true
});
	
$(".test4").hrzAccordion(
{eventTrigger: "mouseover",
openOnLoad   : "2",
handlePositionArray	: "left,left,right,right,right"
});
	
$(".test2").hrzAccordion(
{handlePosition    : "right",
openOnLoad     	: 5,
closeOpenAnimation	: 2
});

$(".test3").hrzAccordion(
{containerClass     : "container3",
listItemClass      : "listItem3",					
contentWrapper     : "contentWrapper3",
contentInnerWrapper: "contentInnerWrapper3",
handleClass        : "handle3",
handleClassOver    : "handleOver3",
handleClassSelected: "handleSelected3"
});

});
}