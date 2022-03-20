import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService} from '../services/backend.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: String="" ;
  dataLoading: boolean = false;
  private qeurySubscription;
  savedChanges: boolean = false;
  
  

  

  constructor(private _backendService: BackendService, private _route: Router) { }
  getValue(formData){
    console.log(formData)
    // console.log(JSON.stringify(formData.json))
    this.dataLoading= true;
    this.qeurySubscription = this._backendService.getValue(formData).subscribe((res) => {
        if(res["errorCode"] > 0){
        this.error = false;
        this.errorMessage = " ";
        this.dataLoading = false;
        console.log(formData)
        this.savedChanges = true;
      } else {
        this.error = true;
        this.errorMessage = res["errorMessage"];
        this.dataLoading = false;
      }
      },
    (error) => {
      this.error = true;
      this.errorMessage = error.message;
      this.dataLoading = false;

    },
    () => {
      this.dataLoading = false;
    }
    );
  }
 
  ngOnInit(): void {
  }
  ngOnDestroy(){
    
  }

}
