import {Request, Response} from "express";
import { WorkController } from "../controllers/controller";

export class Routes { 
	public workController: WorkController = new WorkController();
	public routes(app): void { 
		app.route('/')
		.get((req: Request, res: Response) => { 
			res.status(200).send({ message: 'GET request successfulll!!!!' }) 
			}) 
		// Work 
		app.route('/work') 
		// Get all
		.get(this.workController.getWorks)
		// Create
		.post(this.workController.addNewWork);
	
		// edit specific work
		app.route('/work/:workId')
		.get(this.workController.getWorkWithID) // get a specific work
		.put(this.workController.updateWork) // update a specific work 
		.delete(this.workController.deleteWork); // delete a specific work 

	}
}
	
