var names=new Array();
names[0]="Simran";
names[1]="John";
names[2]="Jaswinder";
names[3]="jason";
names[4]="Aman";
names[5]="Komal";
names[6]="Taran";
names[7]="paula";
names[8]="Teena";
names[9]="jaggie";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}