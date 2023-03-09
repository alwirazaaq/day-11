package main

import (
	"fmt"
	"html/template"
	"io"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func main() {
	e := echo.New()

	//route static untuk mengakses folder public
	e.Static("/ASSETS", "ASSETS")

	//rendeer
	t := &Template{
		templates: template.Must(template.ParseGlob("views/*.html")),
	}

	e.Renderer = t

	//Routing
	e.GET("/hello", helloworld)
	e.GET("/", home)
	e.GET("/contact", contact)
	e.GET("/project", project)
	e.GET("/testimonial", testimonial)
	e.GET("/project-detail/:id", projetDetail)
	e.POST("/add-blog", addBlog)

	fmt.Println("yahahahaha hayuukkk 5000")
	e.Logger.Fatal(e.Start("localhost:5000"))
}

func helloworld(c echo.Context) error {
	return c.String(http.StatusOK, "hellojing")
}

func home(c echo.Context) error {
	return c.Render(http.StatusOK, "index.html", nil)
}

func contact(c echo.Context) error {
	return c.Render(http.StatusOK, "contact.html", nil)
}

func project(c echo.Context) error {
	return c.Render(http.StatusOK, "project.html", nil)
}

func testimonial(c echo.Context) error {
	return c.Render(http.StatusOK, "testimonial.html", nil)
}

func projetDetail(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	data := map[string]interface{}{
		"Id":      id,
		"Title":   "project 1",
		"Content": "Bagaimana pemberontakan tersebut berjalan? Pemberontakan PKI Madiun diawali dengan melancarkan propaganda anti pemerintah dan pemogokan kerja oleh kaum buruh. Selain itu pemberontakan juga dilakukan dengan menculik dan membunuh beberapa tokoh negara.",
	}

	return c.Render(http.StatusOK, "project-detail.html", data)
}

func addBlog(c echo.Context) error {
	title := c.FormValue("projectName")
	content := c.FormValue("description")

	println("Title: " + title)
	println("Content: " + content)

	return c.Redirect(http.StatusMovedPermanently, "/add-blog")
}
