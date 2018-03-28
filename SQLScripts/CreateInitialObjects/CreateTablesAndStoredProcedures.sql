CREATE DATABASE JBO
GO

CREATE SCHEMA [Management]
GO

CREATE SCHEMA [Web]
GO

CREATE SCHEMA [Scheduler]
GO

CREATE TABLE Management.Instructors
(
	Id INT IDENTITY(1,1) PRIMARY KEY
	, FullName VARCHAR(200)
	, IsActive BIT
)

CREATE TABLE Management.Projects
(
	Id INT IDENTITY(1,1) PRIMARY KEY
	, ProjectName VARCHAR(200)
	, ProjectDescription VARCHAR(1000)
	, IsActive BIT
)

--SELECT * FROM Management.Instructors
--SELECT * FROM Management.Projects

-- CRUD for Instructors
GO
CREATE PROCEDURE Management.AddInstructor
(
	@FullName VARCHAR(200)
)
AS
BEGIN
	INSERT INTO Management.Instructors
	(FullName, IsActive)
	SELECT @FullName, 1
END

GO
CREATE PROCEDURE Management.UpdateInstructor
(
	@id INT
	, @FullName VARCHAR(200)
)
AS
BEGIN
	UPDATE Management.Instructors
	SET FullName = @FullName
END

GO
CREATE PROCEDURE Management.DeleteInstructor
(
	@id INT
)
AS
BEGIN
	UPDATE Management.Instructors
	SET IsActive = 0
	WHERE id = @id
END

GO
CREATE PROCEDURE Management.GetInstructors
(
	@id INT = NULL
)
AS
BEGIN
	SELECT Id, FullName, IsActive
	FROM Management.Instructors
	WHERE ISNULL(@id, id) = id
END


-- CRUD for Projects
GO
CREATE PROCEDURE Management.AddProject
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

GO
CREATE PROCEDURE Management.UpdateProject
(
	@id INT
	, @ProjectName VARCHAR(200)
	, @ProjectDescription VARCHAR(1000)
)
AS
BEGIN
	UPDATE Management.Projects
	SET ProjectName = @ProjectName
		, ProjectDescription = @ProjectDescription
END

GO
CREATE PROCEDURE Management.DeleteProject
(
	@id INT
)
AS
BEGIN
	UPDATE Management.Projects
	SET IsActive = 0
	WHERE id = @id
END

GO
CREATE PROCEDURE Management.GetProjects
(
	@id INT = NULL
)
AS
BEGIN
	SELECT Id, ProjectName, ProjectDescription, IsActive
	FROM Management.Projects
	WHERE ISNULL(@id, id) = id
END