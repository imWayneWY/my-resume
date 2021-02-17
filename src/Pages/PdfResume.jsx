import React, {useRef, useEffect} from 'react';
import WebViewer from '@pdftron/webviewer';
import style from './PdfResume.module.css';

const PdfResume = () => {
    const viewer = useRef(null);
    useEffect(() => {
    WebViewer(
      {
        path: 'webviewer',
        initialDoc: 'resume_weiyan.pdf',
      },
      viewer.current,
    ).then((instance) => {
      // const { docViewer, Annotations } = instance;
      instance.setTheme('dark');

      // const annotManager = docViewer.getAnnotationManager();

      // docViewer.on('documentLoaded', () => {
      //   const rectangleAnnot = new Annotations.RectangleAnnotation();
      //   rectangleAnnot.PageNumber = 1;
      //   // values are in page coordinates with (0, 0) in the top left
      //   rectangleAnnot.X = 100;
      //   rectangleAnnot.Y = 150;
      //   rectangleAnnot.Width = 200;
      //   rectangleAnnot.Height = 50;
      //   rectangleAnnot.Author = annotManager.getCurrentUser();

      //   annotManager.addAnnotation(rectangleAnnot);
      //   // need to draw the annotation otherwise it won't show up until the page is refreshed
      //   annotManager.redrawAnnotation(rectangleAnnot);
      // });
    });
    }, []);
    return (
        <div className={style.root}>
            <div className={style.webview} ref={viewer}></div>
        </div>
    )
}

export default PdfResume;