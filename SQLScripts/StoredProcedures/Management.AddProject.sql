USE [JBO]
GO
/****** Object:  StoredProcedure [Management].[AddProject]    Script Date: 3/26/2018 6:47:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [Management].[AddProject]
(
	@ProjectName VARCHAR(200)
	, @ProjectDescription VARCHAR(1000)
)
AS
BEGIN
	INSERT INTO Management.Projects
	(ProjectName, ProjectDescription, IsActive)
	SELECT @ProjectName, @ProjectDescription, 1
END

