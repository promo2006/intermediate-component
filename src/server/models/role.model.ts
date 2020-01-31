export class Role {

	public selected: boolean = false;
	public permissions: RolePermission[];
	public routePermissions: RoutePermission[];
	public singlePermissions: SinglePermission[];

	constructor(
		public id: string,
		public description: string,
		public createdDate: Date,
		public createdByUserId: string,
		public lastModifiedDate: Date,
		public lastModifiedByUserId: string
	) { }
}

export class RolePermission {

	constructor(
		public roleId: string,
		public groupId: string
	) { }
}

export class RolePermissionsGroup {

	public selected: boolean = false;

	constructor(
		public groupId: string,
		public category: string
	) { }
}

export class RoutePermission {

	constructor(
		public routeId: string,
		public groupId: string,
		public route: string,
		public level: string
	) { }
}

export class SinglePermission {

	constructor(
		public id: string,
		public groupId: string,
		public type: string,
		public element: string
	) { }
}
