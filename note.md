site.collections #全站集合对象
site.collections.collection_label #全站集合中的一个集合对象
site.collecionts.collection_label.label #集合名称
site.collecionts.collection_label.docs #集合下的全体文档(对象）组成的数组
site.collecionts.collection_label.files #集合下全体静态文件(对象）组成的数组
site.collecionts.collection_label.relative_directory #集合的相对目录
site.collecionts.collection_label.directory #集合的绝对目录
site.collecionts.collection_label.output #集合的output状态，是否输出显示
site.collecionts.collection_label.docs[0].content # 集合下某个文档的内容，忽略头信息
site.collecionts.collection_label.docs[0].output # 集合下某个文档的渲染内容，若无头信息，此属性无效
site.collecionts.collection_label.docs[0].path # 集合下某个文档的绝对路径
site.collecionts.collection_label.docs[0].relative_path # 集合下某个文档的相对路径
site.collecionts.collection_label.docs[0].url # 集合下某个文档的渲染路径，若output未开，则无效
site.collecionts.collection_label.docs[0].collection # 该文档所在集合的名称
site.collecionts.collection_label.docs[0].date #该文档所在集合的创建日期


除此之外，集合还可以直接从site.collection_label快捷访问。其中collection_label是自定义的集合名称。它是集合内所有文章的一个数组，每篇文章都可以访问头信息中定义的属性，以及含有url属性来访问文章的链接。

访问所有文章的方法：

{% assign documents = site.documents %}
{% for doc in documents] %}
    <div class="box">
        {% if doc.collection == "posts" %}
            博客文章：
            <p><a href="{{ site.url }}{{ doc.url }}">{{ doc.title }}</a></p>
        {% else %}
            其他文章：
            <p><a href="{{ site.url }}{{ doc.url }}">{{ doc.title }}</a></p>
        {endif}                       
    </div>
{% endfor %} 