CREATE TABLE [dbo].[RolePermission] (
   [RoleId] [varchar](50) NOT NULL ,
   [GroupId] [varchar](200) NOT NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_RolePermission] PRIMARY KEY CLUSTERED ([RoleId], [GroupId])
)


GO
