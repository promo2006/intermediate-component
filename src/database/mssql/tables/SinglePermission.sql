CREATE TABLE [dbo].[SinglePermission] (
   [VCC] [varchar](50) NOT NULL ,
   [ID] [varchar](50) NOT NULL ,
   [GroupId] [varchar](200) NULL ,
   [Type] [varchar](50) NULL ,
   [Element] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_SinglePermission] PRIMARY KEY CLUSTERED ([VCC], [ID])
)


GO
