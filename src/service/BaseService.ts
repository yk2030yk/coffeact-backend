import { DataSource } from 'apollo-datasource'
import { db } from '../firebase'

export class ServiceBase extends DataSource {}

export class FireStoreServiceBase extends ServiceBase {
  protected db: FirebaseFirestore.Firestore
  constructor() {
    super()
    this.db = db
  }
}
