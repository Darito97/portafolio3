window.addEventListener('scroll', () => {
  const aboutMe = document.getElementById("content-about-me")
  const skills = document.getElementById("my-skills")
  const projectList = document.getElementById("project-list")
  const extraSpace = 25;
  if (window.scrollY >= aboutMe.getBoundingClientRect().top - extraSpace && aboutMe.classList.contains("hide")) {
    aboutMe.classList.remove('hide')
    aboutMe.classList.add('show-animation')
  }
  if (window.scrollY >= skills.getBoundingClientRect().top - extraSpace && skills.classList.contains("hide")) {
    skills.classList.remove('hide')
    skills.classList.add('show-animation')
  }
  if (window.scrollY >= projectList.getBoundingClientRect().top - extraSpace && projectList.classList.contains("hide")) {
    projectList.classList.remove('hide')
    projectList.classList.add('show-animation')
  }
})