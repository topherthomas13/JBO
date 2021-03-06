USE [JBO]
GO
/****** Object:  StoredProcedure [Management].[GetProjects]    Script Date: 3/26/2018 6:48:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [Management].[GetProjects]
(
	@id INT = NULL
)
AS
BEGIN
	SELECT Id, ProjectName, ProjectDescription, IsActive
	FROM Management.Projects
	WHERE ISNULL(@id, id) = id
END