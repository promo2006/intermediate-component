CREATE TABLE [dbo].[User] (
   [ID] [varchar](50) NOT NULL ,
   [Email] [varchar](100) NULL ,
   [Firstname] [varchar](100) NULL ,
   [Lastname] [varchar](100) NULL ,
   [Password] [varchar](100) NULL ,
   [Role] [varchar](50) NULL ,
   [Language] [varchar](50) NULL ,
   [TimeZone] [varchar](50) NULL ,
   [IsSystemUser] [bit] NULL   ,
   [CreatedDate] [datetime] NULL   ,
   [CreatedByUserId] [varchar](50) NULL ,
   [LastModifiedDate] [datetime] NULL   ,
   [LastModifiedByUserId] [varchar](50) NULL ,
   [TimeStamp] [datetime] NULL   

   ,CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([ID])
)


GO
