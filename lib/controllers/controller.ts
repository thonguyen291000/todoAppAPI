import * as mongoose from 'mongoose'; 
import { WorkSchema } from '../models/models'; 
import { Request, Response } from 'express';

const Work = mongoose.model('Work', WorkSchema); 

export class WorkController{ 

	public addNewWork (req: Request, res: Response) { 
		let newWork = new Work(req.body);
		newWork.save((err, contact) => { 
			if(err){ res.send(err); } 
			res.json(contact); 
		});
	}
	public getWorks(req: Request, res: Response) {
		Work.find({}, (err, contact) => { 
			if(err){ res.send(err); }
			res.json(contact); 
		}); 
	}
	public getWorkWithID (req: Request, res: Response) { 
		Work.findById(req.params.workId, (err, work) => { 
			if(err){ res.send(err); } 
			res.json(work); 
		});
	}
	public updateWork (req: Request, res: Response) {
		Work.findOneAndUpdate({ _id: req.params.workId }, req.body, { new: true }, (err, work) => { 
			if(err){ res.send(err);}
			res.json(work);
		});
	}
	public deleteWork (req: Request, res: Response) {
		Work.remove({ _id: req.params.workId }, (err, work) => {
			if(err){ res.send(err); } 
			res.json({ message: 'Successfully deleted work!'}); 
		}); 
	}

}
