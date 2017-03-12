import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {AuthHttp} from "angular2-jwt";
import {Topic} from "../model/topic.model";

const url = '/api/topics';

@Injectable()
export class TopicService {

  constructor(private authHttp: AuthHttp) {
  }

  get(id: number): Observable<Topic> {
    return this.authHttp.get(`${url}/${id}`).map(resp => resp.json());
  }

  create(topic: Topic): Observable<Response> {
    return this.authHttp.post(url, topic);
  }

  delete(id: number): Observable<Response> {
    return this.authHttp.delete(`${url}/${id}`);
  }

  update(topic: Topic): Observable<Response> {
    return this.authHttp.put(`${url}/${topic.id}`, topic).map(resp => resp.json());
  }

  getAll(): Observable<Topic[]> {
    return this.authHttp.get(`${url}`).map(resp => resp.json());
  }
}
