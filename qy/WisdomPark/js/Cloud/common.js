var REGEX = {
	TRIM : /(^[\s\uFEFF\xA0]*)|([\s\uFEFF\xA0]*$)/g, // 去两端空格
	LENB : /[^\x00-\xff]/g,
	EMAIL : /^[0-9a-zA-Z]+([-_\.][0-9a-zA-Z]+)*@[0-9a-zA-Z]+([-_\.][0-9a-zA-Z]+)*(\.[a-zA-Z]{2,5})+$/g, // 邮箱验证
	CHINESE : /^[\u4e00-\u9fa5]+$/g, // 中文字符
	MOBILE : /^1[34578]\d{9}$/g, // 手机号
	TELEPHONE : /^(0\d{2,3}(\-)?)?[1-9]\d{6,7}$/g, // 电话
	ENGLISH : /^[a-zA-Z]+$/g,// 英文字符
	IDCARD : /^([1-9]\d{5})((\d{2}((0[1-9])|(1[0-2]))((0[1-9])|([1-2]\d)|(3[0-1]))(\d{3}))|([1-2]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2]\d)|(3[0-1])))(\d{3}[0-9xX]))$/g,
	DATE : /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))( (([0-1]?\d)|(2[0-3]))(:([0-5]?\d)){2})?$/g,
	TIME : /^(([0-1]?\d)|(2[0-3]))(:([0-5]?\d)){2}$/g,
	DATETIME : /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))( (([0-1]?\d)|(2[0-3]))(:([0-5]?\d)){2})?$/g,
	NUMBER : /^(0|(-?((0\.\d+)|(([1-9]\d*)(\.\d+)?))))$/g,
	INTEGER : /^(0|(-?([1-9]\d*)))$/g,
	FLOAT : /^[1-9]\d*$/g,
	IPV4 : /^(([1-9]\d{0,1})|(1\d{2})|(2[0-4]\d)|(25[0-5]))(\.(\d|([1-9]\d)|(1\d{2})|(2[0-4]\d)|(25[0-5]))){3}$/g

};



//
function getType(object) {
	if (typeof object === "undefined") {
		return "undefined";
	}
	if (object == null) {
		return NULL;
	}
	if (Object.prototype.toString.call(object) == "[object Number]") {
		return "Number";
	}
	if (Object.prototype.toString.call(object) == "[object String]") {
		return "String";
	}
	if (Object.prototype.toString.call(object) == "[object Date]") {
		return "Date";
	}
	if (Object.prototype.toString.call(object) == "[object Boolean]") {
		return "Boolean";
	}
	if (Object.prototype.toString.call(object) == "[object Function]") {
		return "Function";
	}
	if (Object.prototype.toString.call(object) == "[object Object]") {
		return "Object";
	}
	if (Object.prototype.toString.call(object) == "[object Array]") {
		return "Array";
	}
	if (Object.prototype.toString.call(object) == "[object RegExp]") {
		return "Regex";
	}

}

var Cookie = {

	/**
	 * author: zxy(张笑雨)
	 * 参数说明： name:Cookie中存储的名称 value:对应的值 days:多少天后失效 domain：指定域名
	 * 
	 * 页面有效Cookie Cookie.set("userNamePage1", "zhaost1");
	 * 
	 * 页面有效Cookie，并且指定域名： Cookie.set("userNamePage2", "zhaost2","zhaost.com");
	 * 
	 * 多少日期失效Cookie Cookie.set("userNameDay1", "zhaost3", 30);
	 * 
	 * 多少日期失效Cookie，并且指定域名： Cookie.set( "userNameDay2", "zhaost4", 30,"zhaost.com");
	 * 
	 */
	set : function(name, value, days, domain) {
		var paramDayType = getType(days);
		if (paramDayType == "String") {
			domain = days;
		}
		var expire = "";
		if (paramDayType == "Number" && days != 0) {
			expire = new Date((new Date()).getTime() + days * 24 * 3600000);
			expire = ";expires=" + expire.toGMTString();
		}
		var domainStr = "";
		if (domain != null && domain.length > 0) {
			domainStr = ";domain=" + domain;
		}
		var path = ";path=/ ";
		document.cookie = name + "=" + escape(value) + "" + expire + "" + path + "" + domainStr;
	},

	get : function(name) {
		var docCookie = document.cookie;
		var cookieArray = docCookie.split(";");
		var cookieCount = cookieArray.length;
		var cookieInfo = "";
		var cookieValue = "";
		var eachArray;
		for (var ii = 0; ii < cookieCount; ii++) {
			cookieInfo = cookieArray[ii];
			if (cookieInfo == null || cookieInfo == "") {
				continue;
			}
			eachArray = cookieInfo.split("=");
			if (eachArray.length != 2) {
				continue;
			}
			if (name == eachArray[0].Trim()) {
				cookieValue = unescape(eachArray[1]);
				if (cookieValue != null) {
					cookieValue = unescape(cookieValue);
				}
				break;
			}
		}

		return cookieValue;
	},
	clear : function(name, domain) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = "";
		var path = "; path=/";
		var domainStr = "";
		if (domain != null && domain.length > 0) {
			domainStr = ";domain=" + domain;
		}
		document.cookie = name + "=" + escape(cval) + ";expires=" + exp + path + domainStr;
	}
};

/*
 * 验证字符串是否为空
 */
String.prototype.isEmpty = function() {
	if (this == null || this.trim().length <= 0) {
		return true;
	} else {
		return false;
	}
};

function isEmpty(str){
	if (str == null || str.trim().length <= 0) {
		return true;
	} else {
		return false;
	}
}

var Browser={
		
};

var StringUtil={
	trim:function(str){},
	Trim:function(str){},
	lenb:function(str){},
	Lenb:function(str){},
	upperFirst:function(str){},
	lowerFirst:function(str){},
		
};




/*
 * JavaScript 去两边空格
 * 
 */

String.prototype.trim = function() {
	return this.replace(REGEX.TRIM, "");
};

String.prototype.Trim = function() {
	return this.replace(REGEX.TRIM, "");
};

function trim(str){
	return str.replace(REGEX.TRIM, "");
}



/*
 * JavaScript 计算字符串长度
 * 
 * 一个中文算两个字符
 */

String.prototype.lenb = function() {
	return this.replace(REGEX.LENB, "**");
};

String.prototype.Lenb = function() {
	return this.replace(REGEX.LENB, "**");
};

function lenb(str){
	return str.replace(REGEX.LENB, "**");
}
/*
 * 字符串替换 替换所有的符合条件的字符串 oldStr 原关键字 newStr 新关键字
 */
String.prototype.replaceAll = function(oldStr, newStr) {
	var regex = new RegExp(oldStr, "g");
	return this.replace(regex, newStr);
};



/*
 * 将字符串转成字符数组
 */
String.prototype.toCharArray = function() {
	return this.split("");
};

/*
 * 第一个字母大写
 */
String.prototype.upperFirst = function() {
	return this.replace(/^[a-z]/, function(s) {
		return s.toUpperCase();
	});
};
/*
 * 第一个字母小写
 */
String.prototype.lowerFirst = function() {
	return this.replace(/^[a-z]/, function(s) {
		return s.toLowerCase();
	});
};

/**
 * 获取GMT时间
 */

function getGmtDate() {
	var localDate = new Date();
	return new Date(localDate.getTime() + localDate.getTimezoneOffset() * 60 * 1000);
}

/**
 * 
 * 验证是否为数组
 * 
 * @param {Object}
 *            arr
 */
function isArray(arr) {
	return arr instanceof Array;
}


/**
 * 日期格式化
 */

Date.prototype.format = function(format) {
	if (format.isEmpty()) {
		format = "yyyy-MM-dd hh:mm:ss";
	}
	var o = {
		"y+" : this.getFullYear(), // 年份
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return format;
};
/*
 * 
 * 四舍五入计算
 * 
 * @param {Object} digitNumber
 */

Number.prototype.round = function(bits) {
	var mn = Math.pow(10, bits);
	return Math.round(number * mn) / mn;
};



String.prototype.parseInt = function() {
	return parseInt(this, 10);
};

/*
 * 
 * 
 * 
 * 根据 ID值获取到页面中的对象
 * 
 */
function $id(objId) {
	return document.getElementById(objId);
}

/*
 * 
 * 
 * 根据 Name值获取到页面中的对象
 * 
 */
function $n(name) {
	return document.getElementsByName(name);
}

/*
 * 
 * 
 * 根据 元素属性获取到属性值
 * 
 */

function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj, false)[attr];
}



/**
 * 格式化输出 校验
 * 
 * @param dataStr
 * @param formatStr
 * @returns
 */
function verifyOut(dataStr, formatStr) {
	if (typeof (dataStr) == 'undefined') {
		return formatStr;
	}
	if (dataStr == null || dataStr == "null") {
		return formatStr;
	}

	return dataStr;
}


/**
 * 类似Java的Sleep方法
 * 
 * @param {Object}
 *            millSeconds 等待时间：毫秒数
 * @param {Object}
 *            callBack 回调函数
 */
function sleep(millSeconds, callBack) {
	if (millSeconds > 0) {
		window.setTimeout(callBack, millSeconds);
	} else {
		callBack();
	}
}

/**
 * 判断当前对象是否为空
 * @method isEmpty
 * @param {Object} obj
 * @return {Boolean} empty 当为 null,undefined,"" 将返回true
 */
window.isEmpty = function(obj) {
	return (obj == null || typeof obj == "undefined" || obj.length == 0)
}
 
/**
 * 判断当前对象是否非空
 * @method isNotEmpty
 * @param {Object} obj
 * @return {Boolean}  
 */
window.isNotEmpty = function(obj) {
	return !isEmpty(obj);
}




