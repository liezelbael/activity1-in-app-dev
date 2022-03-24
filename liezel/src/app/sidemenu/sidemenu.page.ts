import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

  public folder: string;
	public userlist = [
  	{
  		id:1,
  		name: 'John'
  	},
  	{
  		id:2,
  		name: 'Doe'
  	},
  	{
  		id:3,
  		name: 'Eric'
  	},
  ]

  constructor(private activatedRoute:ActivatedRoute, public actionsheetCtrl:ActionSheetController, public alertCtrl:AlertController) {}

  ngOnInit(){
  	this.folder=this.activatedRoute.snapshot.paramMap.get('id');
  }

  async showactionButtons(index:number){
  	let actionSheet=this.actionsheetCtrl.create({
  		header: 'Select',
  		cssClass: 'buttons-css',
  		animated: true,
  		backdropDismiss: true,
  		keyboardClose: false,
  		mode: 'ios',

  		buttons:[
  		{
  			text: 'Delete',
  			role: 'destructive',
  			icon: 'trash',
  			handler:() =>{
  				this.userlist.splice(index,1);
  				this.showAlert();
        }
  		},
  		{
  			text: 'Cancel',
  			role: 'cancel',
  			icon: 'close',
  			handler:() =>{
  				console.log('Cancel clicked');	
  			}
  		}
  		]
    });
    	(await actionSheet).present();
  }
  

  async showAlert(){
  	const alert = this.alertCtrl.create({
  		header:"Data has been successfully deleted!",
  		buttons:['Ok'],
  		});
  	(await alert).present();
  }

}