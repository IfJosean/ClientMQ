export class Student {
  constructor(
    public name: string,
    public address: string,
    public phone: { home: String, work: String },
    public _id: string
  ) {}
}
