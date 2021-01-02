type Query = FirebaseFirestore.Query<FirebaseFirestore.DocumentData>

export const addQueryLimit = (query: Query, limit: number) => query.limit(limit)

export const addQueryStartAfter = (query: Query, limit: number) => query.limit(limit)
