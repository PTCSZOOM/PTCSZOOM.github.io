// ------------------------------
function getURL() {
	var links = ["https://parktudor-org.zoom.us/j/81463027750?pwd=aW9ib1UvRW1TczZWRko0dmJ0ek1DQT09", "https://parktudor-org.zoom.us/j/81888256555?pwd=OEhkNFFRemJFSXhCdDE5cGpjUkhGQT09", "https://parktudor-org.zoom.us/j/82763173963?pwd=Z1BCcHJxY1h2Nm5KUlo0bmF2MVRmdz09", "https://parktudor-org.zoom.us/j/84142823489?pwd=REpENXlBcE9MNEVXTkQ3NExtMXlqQT09", "https://parktudor-org.zoom.us/j/89076918752?pwd=aktuOXZLR3ZjcjJjNTJyNWU5SFJ5UT09"];
  	var d = new Date();
  	var n = d.getDay();
  
  	if(n>=1 && n<=5) {
		return links[n-1];
  	}
  	else {
		return links[0];
  	}
}


