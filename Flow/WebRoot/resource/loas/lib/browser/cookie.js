/**
���ƣ�Cookie����
�汾��1.0.1 (Beta)
���ߣ�����
E-mail��[email]honglei@live.com[/email]
*/
var HL = HL || {};
HL.Cookie = {
/*
�������ƣ�HL.Cookie.Get([string name])
�������ܣ��õ�Cookie
������name ��ѡ�Ҫȡ�õ�Cookie����
˵����nameΪ��ʱ��ͨ��������ʽ����ȫ��Cookie��name��Ϊ��ʱ���ش�Cookie���Ƶ�ֵ��û���κ�ֵʱ����undefined
*/
	Get : function(name){
		var cv = document.cookie.split("; ");//ʹ��"; "�ָ�Cookie
		var cva = [], temp;
		/*ѭ���ĵõ�Cookie������ֵ*/
		for(i=0; i<cv.length; i++){
			temp = cv[i].split("=");//��"="�ָ�Cookie��������ֵ
			cva[temp[0]] = unescape(temp[1]);
		}
		if(name) return cva[name];//�����name��������name��Cookieֵ
		else return cva;//���û��name�����������Ϊkey��ֵΪValue������
	},
/*
�������ƣ�HL.Cookie.Set(string name, string  value[, int expires[, string path[, string domain[, string secure]]]])
�������ܣ�����Cookie
������name ��Ҫ�Ҫ�����Cookie����
      value ��Ҫ�Ҫ�����Cookie���ƶ�Ӧ��ֵ
      expires ��ѡ�Cookie�Ĺ���ʱ�䣬������������Ϊ��λ�ı���ʱ�䣬Ҳ�����������ڸ�ʽ��wdy, DD-Mon-YYYY HH:MM:SS GMT���ĵ���ʱ��
      path ��ѡ�Cookie�ڷ������˵���Ч·��
      domain ��ѡ���Cookie����Ч����
      secure ��ѡ� ָ��Cookie �Ƿ��ͨ����ȫ�� HTTPS ���Ӵ��ͣ�0��false���ʱΪ��
˵��������ɹ��򷵻�true������ʧ�ܷ���false
*/
	Set : function(name, value, expires, path, domain, secure){
		if(!name || !value) return false;//���û��name��value�򷵻�false
		if(name == "" || value == "") return false;//���name��valueΪ���򷵻�false
		/*���ڹ���ʱ��Ĵ���*/
		if(expires){
			/*��������������GMTʱ�䣬��ǰʱ���������Ϊ��λ��expires*/
			if(/^[0-9]+$/.test(expires)){
				var today = new Date();
				expires = new Date(today.getTime()+expires*1000).toGMTString();
			/*�ж�expires��ʽ�Ƿ���ȷ������ȷ��ֵΪundefined*/
			}else if(!/^wed, \d{2} \w{3} \d{4} \d{2}\:\d{2}\:\d{2} GMT$/.test(expires)){
				expires = undefined;
			}
		}
		/*�ϲ�cookie�����ֵ*/
		var cv = name+"="+escape(value)+";"
		       + ((expires) ? " expires="+expires+";" : "")
		       + ((path) ? "path="+path+";" : "")
		       + ((domain) ? "domain="+domain+";" : "")
		       + ((secure && secure != 0) ? "secure" : "");
		/*�ж�Cookie�ܳ����Ƿ����4K*/
		if(cv.length < 4096){
			document.cookie = cv;//д��cookie
			return true;
		}else{
			return false;
		}
	},
/*
�������ƣ�HL.Cookie.Del(string name[, string path[, string domain]])
�������ܣ�ɾ��Cookie
������name ��Ҫ�Ҫɾ����Cookie����
      path ��ѡ�Ҫɾ����Cookie�ڷ������˵���Ч·��
      domain ��ѡ�Ҫɾ����Cookie����Ч����
˵����ɾ���ɹ�����true��ɾ��ʧ�ܷ���false
*/
	Del : function(name, path, domain){
		if(!name) return false;//���û��name�򷵻�false
		if(name == "") return false;//���nameΪ���򷵻�false
		if(!this.Get(name)) return false;//���Ҫɾ����nameֵ�������򷵻�false
		/*�ϲ�Cookie�����ֵ*/
		document.cookie = name+"=;"
		                  + ((path) ? "path="+path+";" : "")
		                  + ((domain) ? "domain="+domain+";" : "")
		                  + "expires=Thu, 01-Jan-1970 00:00:01 GMT;";
		return true;
	}
}

