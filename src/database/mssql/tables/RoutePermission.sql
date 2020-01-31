CREATE TABLE [dbo].[RoutePermission] (
   [ID] [varchar](50) NOT NULL ,
   [GroupId] [varchar](200) NULL ,
   [Route] [varchar](250) NULL ,
   [Level] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_RoutePermission] PRIMARY KEY CLUSTERED ([ID])
)


GO
