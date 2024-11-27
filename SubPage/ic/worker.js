const city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "五星卡" }
const th = self
function LastNum(code) {
	let row = "trueNum";
	if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)) {
		row = "falseNum";
	} else if (!city[code.substr(0, 2)]) {
		row = "falseNum";
	} else {
		if (code.length == 18) {
			code = code.split('');
			let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
			let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
			let sum = 0;
			let ai = 0;
			let wi = 0;
			for (let i = 0; i < 17; i++) {
				ai = code[i];
				wi = factor[i];
				sum += ai * wi;
			}
			if (parity[sum % 11] != code[17].toUpperCase()) {
				row = "falseNum";
			}
		}
	}
	return row;
}
function L(text) {
	for (let i = 0; i < (text.length / 18); i++) {
		let txt = text.slice(i * 18, i * 18 + 18);
		let position = city[txt.slice(0, 2)];
		let b_year = txt.slice(6, 10);
		let b_month = txt.slice(10, 12);
		let b_day = txt.slice(12, 14);
		let old = new Date().getFullYear() - b_year;
		let nn = txt.slice(16, 17) % 2 ? "男" : "女";
		let rtdText = (txt + "&emsp;地区：" + position + "&emsp;出生：" + b_year + "-" + b_month + "-" + b_day + "&emsp;年龄：" + old + "&emsp;性别：" + nn);
		let rtdProcess = (((i + 1) / (text.length / 18) * 100).toFixed(0)).replace(/[^\d]/ig, "");
		let rtdObj = {
			text: rtdText,
			pro: rtdProcess,
			real: LastNum(txt)
		}
		th.postMessage(rtdObj)
	}
}
th.onmessage = (event) => {
	L(event.data)
}
