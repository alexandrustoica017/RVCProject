-- View: public.UsrVwEpics View to feed epics lookups while editing documents only


-- DROP VIEW public."UsrVwEpics";


CREATE OR REPLACE VIEW public."UsrVwEpics"
 AS
 
  SELECT 
	d."Id",
	d."CreatedOn",
	d."CreatedById",
	d."ModifiedOn",
	d."ModifiedById",
	d."ProcessListeners",
	d."UsrDescription",


	d."UsrName",

	d."UsrFileURL",
	d."UsrDocTypeId",
	d."UsrOwnerId",

	d."UsrIssueId",
	d."UsrProjectId",

	d."UsrExisting",
	d."UsrRelatedEpicId",
	d."UsrActualTime",
	d."UsrCommitedTime"
	FROM "UsrDocument" d,
	"UsrDocumentType" t
  
  WHERE 
	d."UsrDocTypeId" = t."Id" AND 
	t."Name"::text = 'Epic'::text;



ALTER TABLE public."UsrVwEpics"
    OWNER TO puser;