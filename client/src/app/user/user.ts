/**
 * Created by josh on 6/2/2017.
 */

/**
 * A simple tuple of values.
 */
export class User {
  constructor(
    public id : number, //more specific values; double, int
    public last_name: string, //length and null constrained.
    public first_name: string,
    public dob: Date //conversion and parsing. '1968-11-16T00:00:00'
  ){}
}
