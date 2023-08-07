$(document).ready(function(){
    console.log('ready');

    $('ul#CHAPTERLIST > li').on('click', function(e){
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
        let selectIndex = $(this).index();
        let selectContent = $('div.contentlist').eq(selectIndex);
        selectContent.addClass('selected');
        selectContent.siblings().removeClass('selected');
    })

    $('ul.contentitem > li').on('click', function(e){
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
        let videoUrl = $(this).data('movie');
        const youtubePlayerDiv = document.getElementById("youtube-player");
        youtubePlayerDiv.innerHTML = ""; // Clear any previous video
        const iframe = document.createElement("iframe");
        iframe.src = videoUrl;
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.setAttribute("allowfullscreen", "");
        youtubePlayerDiv.appendChild(iframe);
    })
})
function toggleH2Chapter(chapterId) {
    const h2Chapters = document.querySelectorAll(".h2-chapter");
    for (const chapter of h2Chapters) {
        if (chapter.id === chapterId) {
            chapter.style.display = "block";
        } else {
            chapter.style.display = "none";
        }
    }
}


 function loadVideo(videoUrl) {
    const youtubePlayerDiv = document.getElementById("youtube-player");
    youtubePlayerDiv.innerHTML = ""; // Clear any previous video
    const iframe = document.createElement("iframe");
    iframe.src = videoUrl;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.setAttribute("allowfullscreen", "");
    youtubePlayerDiv.appendChild(iframe);
}

      // YouTube API 호출 후 동영상 ID 추출
function getVideoIdFromUrl(url) {
    var match = url.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com|\.be)\/(?:watch\?v=|embed\/|v\/)?([\w-]{11})(?:\S+)?/);
    return (match && match[1]) || null;
}

// YouTube IFrame API 로드 및 플레이어 생성
function onYouTubeIframeAPIReady() {
    var videoLinks = document.querySelectorAll('.video-link');

    videoLinks.forEach(function (link) {
        var videoId = getVideoIdFromUrl(link.href);
        if (videoId) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                playYouTubeVideo(videoId);
            });
        }
    });
}

// 플레이어 생성 및 동영상 재생
function playYouTubeVideo(videoId) {
    if (typeof YT !== 'undefined') {
        new YT.Player('youtube-player', {
            videoId: videoId,
            playerVars: {
                autoplay: 1
            }
        });
    }
}

function toggleChapter(h2ChapterId) {
    var h2Chapter = document.getElementById(h2ChapterId);
    var h2Chapters = document.querySelectorAll('.h2-chapter');

    h2Chapters.forEach(function (chapter) {
        if (chapter !== h2Chapter) {
            chapter.style.display = 'none';
        }
    });

    h2Chapter.style.display = h2Chapter.style.display === 'block' ? 'none' : 'block';
}