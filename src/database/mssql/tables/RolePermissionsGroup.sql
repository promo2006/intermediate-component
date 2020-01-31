CREATE TABLE [dbo].[RolePermissionsGroup] (
   [GroupId] [varchar](200) NOT NULL ,
   [Category] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_RolePermissionsGroup] PRIMARY KEY CLUSTERED ([GroupId])
)


GO
