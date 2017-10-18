import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { AuthHttpError } from  'angular2-jwt';
import { NoJWTError }     from './errors';

export class Helper {
    static handleError (error: Response | any) {
	// In a real world app, you might use a remote logging infrastructure
	let errMsg: any;
	if (error instanceof Response) {
	    let err_array = [];
	    if(error.status == 0){
		err_array['general'] = 'Could not connect to backend';
	    } else {
		const body = error.json() || '';
		const err = body.errors || JSON.stringify(body);
		if(err instanceof Array){
		    const err_length = err.length;
		    for(var i=0; i < err_length; ++i){
			console.log(err[i]);
			let this_err = err[i].split(':');
			if(this_err.length == 2){
			    err_array[(this_err[0]).trim()] = (this_err[1]).trim();
			}
		    }
		}
	    }
	    errMsg = err_array;
	} else {
	    console.warn('TO DO : PLEASE CATCH ME!', 'handleError');
	    console.log(error, 'error');
	    errMsg = error.message ? error.message : error.toString();

	    if(errMsg == 'No JWT present or has expired'){
		errMsg = new NoJWTError('No JWT present or has expired');
	    }
	}
	console.error(errMsg);
	return Observable.throw(errMsg);
    }//--handleError
}
