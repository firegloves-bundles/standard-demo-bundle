/**
 * Traditional Chinese translation for bootstrap-datepicker
 * Rung-Sheng Jang <daniel@i-trend.co.cc>
 * FrankWu  <frankwu100@gmail.com> Fix more appropriate use of Traditional Chinese habit
 */
;(function($){
	$.fn.datepicker.dates['zh-TW'] = {
		days: ["æææ¥", "ææä¸", "ææäº", "ææä¸", "ææå", "ææäº", "ææå­", "æææ¥"],
		daysShort: ["é±æ¥", "é±ä¸", "é±äº", "é±ä¸", "é±å", "é±äº", "é±å­", "é±æ¥"],
		daysMin:  ["æ¥", "ä¸", "äº", "ä¸", "å", "äº", "å­", "æ¥"],
		months: ["ä¸æ", "äºæ", "ä¸æ", "åæ", "äºæ", "å­æ", "ä¸æ", "å«æ", "ä¹æ", "åæ", "åä¸æ", "åäºæ"],
		monthsShort: ["ä¸æ", "äºæ", "ä¸æ", "åæ", "äºæ", "å­æ", "ä¸æ", "å«æ", "ä¹æ", "åæ", "åä¸æ", "åäºæ"],
		today: "ä»å¤©",
		format: "yyyyå¹´mmæddæ¥",
		weekStart: 1
	};
}(jQuery));
