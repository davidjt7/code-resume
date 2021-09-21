
<p align="center">
    <img src="http://code-resume.herokuapp.com/icons/icon.png" width="200">
</p>

**🔥Build your own Resume in seconds.**

# code-resume

> Create your own offline-first resume by using code-resume.

## Features

* **Offline-first**

* **Theme support Dark & Light mode**

* **Export PDF**
  
* **Easy Customization**

* **Responsive for all devices**

## Quick start

**Clone This repo using:**

<pre>git clone --depth=1 https://github.com/davidjt7/code-resume.git <YOUR_PROJECT_NAME></pre>

Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.

**Install:**

<pre>yarn install</pre>

**Run:**

<pre>yarn start-dev</pre>

**Build:**

<pre>yarn build</pre>

## Customization

For Adding your resume details:-

<pre>cd data</pre>

Then open **index.js** & change details

**Title**

```
export const Title = 'David Joseph Thomas ~ Senior Backend Developer';
```
**Resume Details**

```
export const Resume = {
    intoduction: `{
        Add your intoduction
    }`,

    experience: `{
        Add your experience
    }`,

    skills: `{
        Add your skills
    }`

}
```

## License

This project is licensed under the [MIT](LICENSE) license.
