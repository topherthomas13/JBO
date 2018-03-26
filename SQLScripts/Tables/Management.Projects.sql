USE [JBO]
GO

/****** Object:  Table [Management].[Projects]    Script Date: 3/26/2018 6:49:32 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Management].[Projects](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProjectName] [varchar](200) NULL,
	[ProjectDescription] [varchar](1000) NULL,
	[IsActive] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


