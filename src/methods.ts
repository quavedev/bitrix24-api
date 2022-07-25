
//TODO Remover após passar para novo formato TS

type ApiCrmMethodContexts = "deal" | "lead" | "category" | "status" | "contact" | "product" | "activity" | "timeline" | "settings" | string;

type Method = {
  name: string,
  method: string
}

type ApiCrmMethodType = {
  context: ApiCrmMethodContexts,
  path: `crm.${ApiCrmMethodContexts}.`
  methods: Method[]
}

const API_CRM_METHODS: ApiCrmMethodType[] = [
  {
    context: "deal",
    path: "crm.deal.",
    methods: [
      { name: "create", method: "add.json" },
      { name: "delete", method: "delete.json" },
      { name: "getFields", method: "fields.json" },
      { name: "getById", method: "get.json" },
      { name: "getDeals", method: "list.json" },
      { name: "getDealProducts", method: "productrows.get.json" },
      { name: "createOrUpdateDealProducts", method: "productrows.set.json" },
      { name: "updateDeal", method: "update.json" },
    ],
  },
  {
    context: "lead",
    path: "crm.lead.",
    methods: [
      { name: "create", method: "add.json" },
      { name: "getFields", method: "fields.json" },
      { name: "delete", method: "delete.json" },
      { name: "getById", method: "get.json" },
      { name: "getLeads", method: "list.json" },
      { name: "getLeadProducts", method: "productrows.get.json" },
      { name: "createOrUpdateLeadProduct", method: "productrows.set.json" },
      { name: "updateLead", method: "update.json" },
    ],
  },
  {
    context: "category",
    path: "crm.category.",
    methods: [
      { name: "create", method: "add.json" },
      { name: "delete", method: "delete.json" },
      { name: "getFields", method: "fields.json" },
      { name: "getById", method: "get.json" },
      { name: "getCategories", method: "list.json" },
      { name: "updateCategory", method: "update.json" },
    ],
  },
  {
    context: "status",
    path: "crm.status.",
    methods: [
      { name: "create", method: "add.json" },
      { name: "delete", method: "delete.json" },
      { name: "getStatus", method: "entity.items.json" },
      { name: "getStatusType", method: "entity.types.json" },
      { name: "getStatusFields", method: "fields.json" },
      { name: "getById", method: "get.json" },
      { name: "updateStatus", method: "update.json" },
    ],
  },
  {
    context: "contact",
    path: "crm.contact.",
    methods: [
      { name: "create", method: "add.json" },
      { name: "delete", method: "delete.json" },
      { name: "getFields", method: "fields.json" },
      { name: "getById", method: "get.json" },
      { name: "getContacts", method: "list.json" },
      { name: "updateContact", method: "update.json" },
      { name: "createCompanyToContact", method: "company.add.json" },
      { name: "deleteCompanyFromContact", method: "company.delete.json" },
    ],
  },
  {
    context: "product",
    path: "crm.product.",
    methods: [
      { name: "create", method: "add.json" },
      { name: "delete", method: "delete.json" },
      { name: "getFields", method: "fields.json" },
      { name: "getById", method: "get.json" },
      { name: "getProducts", method: "list.json" },
      { name: "createProductProperty", method: "property.add.json" },
      { name: "deleteProductProperty", method: "property.delete.json" },
      { name: "getProductPropertyFields", method: "property.fields.json" },
      { name: "getProductPropertyById", method: "property.get.json" },
      { name: "getProductProperties", method: "property.list.json" },
      {
        name: "getProductPropertyForAdditionalSettingsFromUserTypes",
        method: "property.settings.fields.json",
      },
      { name: "getProductPropertyTypes", method: "property.types.json" },
      { name: "updateProductProperty", method: "property.update.json" },
      { name: "updateProduct", method: "update.json" },
    ],
  },
  {
    context: "activity",
    path: "crm.activity.",
    methods: [
      { name: "create", method: "add.json" },
      {
        name: "getCurrentActivityCommunicationDetails",
        method: "communication.fields.json",
      },
      { name: "delete", method: "delete.json" },
      { name: "getFields", method: "fields.json" },
      { name: "getById", method: "get.json" },
      { name: "getActivities", method: "list.json" },
      { name: "bindActivityToElement", method: "binding.add.json" },
      { name: "unbindActivityFromElement", method: "binding.delete.json" },
      { name: "getBindedActivities", method: "binding.list.json" },
    ],
  },
  {
    context: "timeline",
    path: "crm.timeline.",
    methods: [
      { name: "bindTimelineToElement", method: "bindings.bind.json" },
      { name: "getBindedTimelineFromElement", method: "bindings.fields.json" },
      { name: "getBindedTimeline", method: "bindings.list.json" },
      { name: "unbindTimelineFromElement", method: "bindings.unbind.json" },
      { name: "addNewCommentIntoTimeline", method: "comment.add.json" },
      { name: "deleteCommentFromTimeline", method: "comment.delete.json" },
      { name: "getTimelineCommentsFields", method: "comment.fields.json" },
      { name: "getCommentBYId", method: "comment.get.json" },
      { name: "getComments", method: "comment.list.json" },
      { name: "updateComment", method: "comment.update.json" },
    ],
  },
  {
    context: "settings",
    path: "crm.settings.",
    methods: [{ name: "getCRMSettings", method: "mode.get.json" }],
  },
  {
    context: "settings",
    path: "crm.settings.",
    methods: [
      { name: "getById", method: "add.json" },
      { name: "getFields", method: "get.json" },
      { name: "getCatalogs", method: "list.json" },
    ],
  },
];

const API_DRIVE_METHODS = [
  {
    context: "folter",
    path: "disk.folter.",
    methods: [
      { name: "getFileFields", method: "getfields.json" },
      { name: "getFolderById", method: "get.json" },
      { name: "getFilesAndFoldersStoredInFolder", method: "getchildren.json" },
      { name: "createSubfolder", method: "addsubfolder.json" },
      { name: "copyFolderIntoAnotherFolder", method: "copyto.json" },
      { name: "moveFolderIntoAnotherFolder", method: "moveto.json" },
      { name: "renameFolderById", method: "rename.json" },
      { name: "removeFolderAndAllSubdirectories", method: "deletetree.json" },
      { name: "moveFolderToTrash", method: "markdeleted.json" },
      { name: "restoreFolderFromTrash", method: "restore.json" },
      { name: "getPublicFolderLink", method: "getExternalLink.json" },
      { name: "addNewFileToFolder", method: "uploadfile.json" },
    ],
  },
  {
    context: "file",
    path: "disk.file.",
    methods: [
      { name: "getFileFields", method: "getfields.json" },
      { name: "getFileById", method: "get.json" },
      { name: "renameFileById", method: "rename.json" },
      { name: "copyFileToFolder", method: "copyto.json" },
      { name: "moveFileToFolder", method: "moveto.json" },
      { name: "removeFile", method: "delete.json" },
      { name: "moveFileToTrash", method: "markdeleted.json" },
      { name: "restoreFileFromTrash", method: "restore.json" },
      { name: "createNewFileVersion", method: "uploadversion.json" },
    ],
  },
  {
    context: "storage",
    path: "disk.storage.",
    methods: [
      { name: "getStorageFields", method: "getfields.json" },
      { name: "createFolderInStorageRoot", method: "addfolder.json" },
      { name: "getStorageById", method: "get.json" },
      { name: "getFilesAndFoldersInStorageRoot", method: "getchildren.json" },
      { name: "getDescriptionOfAvailableStorage", method: "getforapp.json" },
      { name: "getListOfAvailableStorage", method: "getlist.json" },
      { name: "getStorageTypes", method: "gettypes.json" },
      { name: "renameStorageById", method: "rename.json" },
      { name: "addNewFileToStorageRoot", method: "uploadfile.json" },
    ],
  },
  {
    context: "version",
    path: "disk.storage.",
    methods: [{ name: "getVersionById", method: "get.json" }],
  },
];

const API_TASKS_METHODS = [
  {
    context: "task",
    path: "tasks.task.",
    methods: [
      { name: "createTask", method: "add.json" },
      { name: "approveTask", method: "approve.json" },
      { name: "toggleTaskToCompleted", method: "complete.json" },
      { name: "togleTaskToDeferred", method: "deger.json" },
      { name: "delegateTaskToUser", method: "delegate.json" },
      { name: "removeTaskById", method: "delete.json" },
      { name: "disapprovesTaskById", method: "disapprove.json" },
      { name: "getTaskById", method: "get.json" },
      { name: "getTaskFields", method: "fields.json" },
      { name: "checkIfUsersHasAccessToTheTask", method: "getaccess.json" },
      { name: "getTasks", method: "list.json" },
      { name: "pauseTaskAndSwitchItToPending", method: "pause.json" },
      { name: "restartTask", method: "renew.json" },
      { name: "startTask", method: "start.json" },
      { name: "monitoringTask", method: "startwatch.json" },
      { name: "stopMonitoringTask", method: "stopwatch.json" },
      { name: "updateTaskById", method: "update.json" },
      { name: "getTotalOfUsersPerTask", method: "counters.get.json" },
      { name: "getTaskHistoryById", method: "history.list.json" },
      { name: "addFileToTask", method: "files.attach.json" },
      { name: "removeTaskFromFavourites", method: "favorite.delete.json" },
      { name: "addTaskToFavourites", method: "favorite.add.json" },
    ],
  },
  {
    context: "task",
    path: "task.commentitem.",
    methods: [
      { name: "getListOfMethodsOfTaskCommentItem", method: "getmanifest.json" },
      { name: "getTaskComments", method: "getlist.json" },
      { name: "getTaskCommentById", method: "get.json" },
      { name: "createTaskComment", method: "add.json" },
      { name: "updateTaskComment", method: "update.json" },
      { name: "removeTaskComment", method: "delete.json" },
      { name: "isTaskActionAllowed", method: "isactionallowed.json" },
    ],
  },
];

const API_USERS_METHODS = [
  {
    context: "user",
    path: "user.",
    methods: [
      { name: "getCurrent", method: "current.json" },
      { name: "invite", method: "add.json" },
      { name: "update", method: "update.json" },
      { name: "search", method: "search.json" },
    ],
  },
];

const API_CALENDAR_METHODS = [
  {
    context: "calendar",
    path: "calendar.",
    methods: [
      { name: "availableUsers", method: "accessibility.get.json" },
      { name: "createEvent", method: "event.add.json" },
      { name: "deleteCalendarEvent", method: "event.delete.json" },
      { name: "getCalendarEvents", method: "event.get.json" },
      { name: "getFutureCalendarEvents", method: "event.get.nearest.json" },
      { name: "getCalendarEventById", method: "event.getbyid.json" },
      { name: "updateCalendarEvent", method: "event.update.json" },
    ],
  },
];



const API_METHODS = {
  crm: API_CRM_METHODS,
  drive: API_DRIVE_METHODS,
  tasks: API_TASKS_METHODS,
  user: API_USERS_METHODS,
  calendar: API_CALENDAR_METHODS,
};


type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

// // @ts-ignore
// export const getAPIMethods = ({ endpoint }) =>
//   (Object.entries(API_METHODS) as Entries<typeof API_METHODS>).reduce(
//     (acc, [key, value]) => ({
//       ...acc,
//       [key]: value.reduce(
//         (acc, { path, context, methods }) => ({
//           ...acc,
//           [context]: generateAPIMethods({ path, methods, endpoint }),
//         }),
//         {}
//       ),
//     }),
//     {}
//   );
