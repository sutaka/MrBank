import { firestore } from 'firebase-admin'
import { Currency } from '../util/Currency'
import { ShardType } from '../util/Shard'

export interface Transaction {
	from: firestore.DocumentReference
	to: firestore.DocumentReference
	currency: Currency
	amount: number
	executionTime: firestore.Timestamp | firestore.FieldValue
}

export interface ShardedTransaction extends Transaction {
	shard: ShardType
	createTime?: firestore.Timestamp | firestore.FieldValue
	updateTime: firestore.Timestamp | firestore.FieldValue
}