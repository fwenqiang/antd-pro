import { Upload, Icon, Modal,message } from 'antd';
import { config } from 'utils'
import { httpRequest} from 'services/app'

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: this.props.fileList,
    item:this.props.item,
    img_typ:this.props.imgListKey==='2'?'1':'2',
  };

  
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = (info) =>{ 
     console.log('info',info)
     if (info.file.status === 'removed') {  //刪除
      const uid = info.file.uid
      const pamas = {url:config.api.deleteProductImage,data:{ img_id: uid }}
      httpRequest(pamas)
    }else if (info.file.status === 'done') {
      message.success(`图片上传成功`);
      let repData = info.file.response.RSP_BODY
      console.log('done',repData)
    } else if (info.file.status === 'error') {
      message.error(`图片上传失败`);
    }
    this.setState({ fileList:info.fileList })
  }

  render() {
    console.log('zjh',this.props)
    //const {fileList,item,img_typ }= this.state;

    //this.setState({ fileList })
    const { previewVisible, previewImage,fileList,item,img_typ } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">添加圖片</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action={`${config.api.uploadImage}`}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          data={{pro_id:item.pro_id,img_typ:img_typ}}
        >
          {fileList.length >= 15 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall