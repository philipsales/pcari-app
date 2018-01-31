export class Option {
  key: string;
  name: string;
  type?: string;
  order?: number;
  medical_library?: string;
  medical_library_version?: string;
  medical_code?: string;
  medical_name?: string;
  medical_shortname?: string;
  medical_description?: string;

  constructor(
    name: string
  ) {
    this.key = name;
    this.name = name;
  }
}
